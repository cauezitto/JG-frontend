import { initializeApollo } from 'utils/apollo'
import Banner from 'components/Banner'
import DefaultTemplate from 'templates/Default'
import AboutSection from 'components/AboutSection'
import Brands from 'components/Brands'
import Heading from 'components/Heading'
import productsMock from 'mocks/products.json'
import costumersMock from 'mocks/costumers.json'
import ProductCard from 'components/ProductCard'
import PaddingWrapper from 'components/PaddingWrapper'
import GridWrapper from 'components/GridWrapper'
import Costumers from 'components/Costumers'
import { HorizontalPaddingWrapper } from 'styles/pages/home'
import brandsMock from 'mocks/brands.json'
import { useStateContext } from 'context/index'
import { GetStaticProps } from 'next'
import { ProductProps } from 'types/ProductProps'
import { getTierProducts } from 'graphql/queryes/produtos'
import { getCategorias } from 'graphql/queryes/categorias'
import { homeQuery } from 'graphql/queryes/home'
type HomeProps = {
  produtos: ProductProps[]
  categorias: Array<{
    nome: string
  }>
  marcas: Array<{
    url: string
    alternativeText: string
  }>
}

export default function Home({
  produtos,
  categorias = [],
  marcas = []
}: HomeProps) {
  const { server } = useStateContext()
  return (
    <DefaultTemplate categorias={categorias}>
      <br />
      <Banner
        img="/img/bannerHome1.jpeg"
        title="CAMISETAS PERSONALIZADAS"
        description="O seu estilo também é o nosso"
      />
      <PaddingWrapper>
        <HorizontalPaddingWrapper padding="xxlarge">
          <Brands brands={marcas} />
        </HorizontalPaddingWrapper>
        <Heading margin="30px 0" role="h2">
          NOSSOS PRODUTOS
        </Heading>
        <GridWrapper>
          {produtos.map((product, index) => (
            <div className="center" key={index}>
              <ProductCard
                id={product.id}
                name={product.nome}
                price={product.preco}
                image={server + product.cover.url}
                slug={product.slug}
              />
            </div>
          ))}
        </GridWrapper>
      </PaddingWrapper>
      <AboutSection />
      <PaddingWrapper>
        <HorizontalPaddingWrapper padding="xxxlarge">
          <Costumers
            costumers={costumersMock.map((costumer) => ({
              name: costumer.nome,
              img: server + costumer.foto.url,
              testimony: costumer.depoimento
            }))}
          />
        </HorizontalPaddingWrapper>
      </PaddingWrapper>
    </DefaultTemplate>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo()

  const categoriesResponse = await client.query({
    query: homeQuery
  })
  const { categorias, destaque } = categoriesResponse.data

  return {
    props: {
      produtos: destaque.produtos.map((produto: any) => produto.produto),
      marcas: destaque.marcas.logo,
      categorias
    },
    revalidate: 60
  }
}
