import { useState, useEffect } from 'react'
import PaymentsBanner from 'components/PaymentsBanner'
import { FilterProducts, getTierProducts } from 'graphql/queryes/produtos'
import { GetServerSideProps } from 'next'
import DefaultTemplate from 'templates/Default'
import { ProductProps } from 'types/ProductProps'
import { initializeApollo } from 'utils/apollo'
import * as S from 'styles/pages/loja'
import FilterAside from 'components/FilterAside'
import PaddingWrapper from 'components/PaddingWrapper'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import ProductCard from 'components/ProductCard'
import { FiFilter } from 'react-icons/fi'
import { getCategorias } from 'graphql/queryes/categorias'
import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/router'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import { ItemProps } from 'components/FilterAside'
import { IoIosArrowDown } from 'react-icons/io'
import { useQueryProducts } from 'graphql/queryes/produtos'

type MarketPageProps = {
  produtos: ProductProps[]
  categorias: Array<{
    nome: string
  }>
  marcas: Array<{
    nome: string
  }>
  filterItems: Pick<ItemProps, 'type' | 'name'>[]
}

const Loja = ({
  categorias = [],
  marcas = [],
  filterItems
}: MarketPageProps) => {
  const [showFilterAside, setShowFilterAside] = useState(false)
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryProducts({
    notifyOnNetworkStatusChange: true,
    variables: {
      limit: 2,
      where: parseQueryStringToWhere({ queryString: query, filterItems })
    }
  })

  // if (!data) return <p>loading...</p>

  // console.log(data)
  // console.log(filterItems)
  // console.log(parseQueryStringToWhere({ queryString: query, filterItems }))

  const handleCloseAside = () => {
    setShowFilterAside(false)
  }

  // const { produtos, produtosConnection } = data

  const hasMoreGames =
    data?.produtos.length < (data?.produtosConnection?.values?.length || 0)

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 2, start: data?.produtos?.length } })
  }

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/loja',
      query: items
    })
    return
  }

  return (
    <DefaultTemplate categorias={categorias}>
      <PaymentsBanner />
      <PaddingWrapper>
        <HorizontalPaddingWrapper>
          <S.Content>
            <S.MobileFilterOpener>
              <div
                role="button"
                className="filter-opener-button"
                onClick={() => {
                  setShowFilterAside(true)
                }}
              >
                <FiFilter />
                &nbsp; filtros
              </div>
            </S.MobileFilterOpener>
            <FilterAside
              onClose={handleCloseAside}
              mobileShow={showFilterAside}
              marcas={marcas}
              categorias={categorias}
              onFilter={handleFilter}
              isLoading={loading}
              initialValues={parseQueryStringToFilter({
                queryString: query,
                filterItems
              })}
            />
            <S.ProductsList>
              {data?.produtos.map((produto: ProductProps, index: number) => (
                <div key={index} className="center">
                  <ProductCard
                    id={produto?.id}
                    image={
                      process.env.NEXT_PUBLIC_SERVER_HOST + produto?.cover?.url
                    }
                    name={produto?.nome}
                    price={produto?.preco}
                    slug={produto?.slug}
                  />
                </div>
              ))}
            </S.ProductsList>
          </S.Content>

          {hasMoreGames && (
            <HorizontalPaddingWrapper>
              <S.ViewMoreWrapper onClick={handleShowMore}>
                {loading ? (
                  <>Carregando...</>
                ) : (
                  <>
                    Ver Mais &nbsp; <IoIosArrowDown />
                  </>
                )}
              </S.ViewMoreWrapper>
            </HorizontalPaddingWrapper>
          )}
        </HorizontalPaddingWrapper>
      </PaddingWrapper>
    </DefaultTemplate>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const client = initializeApollo()

  const { data } = await client.query({
    query: getCategorias
  })

  const filterCategories = {
    title: 'Categorias',
    name: 'categorias',
    type: 'checkbox',
    fields: data.categorias
  }

  const filterBrands = {
    title: 'Marca',
    name: 'marca',
    type: 'checkbox',
    fields: data.marcas
  }

  const filterItems = [filterCategories, filterBrands]

  const response = await client.query({
    query: FilterProducts,
    variables: {
      limit: 2,
      where: parseQueryStringToWhere({ queryString: query, filterItems })
    }
  })

  // console.log(parseQueryStringToWhere({ queryString: query, filterItems }))

  const { produtos, categorias, marcas } = response.data

  return {
    props: {
      produtos,
      categorias,
      marcas,
      filterItems,
      initialApolloState: client.cache.extract()
    }
  }
}

export default Loja
