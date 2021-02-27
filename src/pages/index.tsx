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
type HomeProps = {
  produtos: ProductProps[]
}

export default function Home({ produtos }: HomeProps) {
  const { server } = useStateContext()
  return (
    <DefaultTemplate>
      <br />
      <Banner
        img="/img/bannerHome1.jpeg"
        title="CAMISETAS PERSONALIZADAS"
        description="O seu estilo é tambem o nosso"
      />
      <PaddingWrapper>
        <HorizontalPaddingWrapper padding="xxlarge">
          <Brands brands={brandsMock} />
        </HorizontalPaddingWrapper>
        <Heading margin="30px 0" role="h2">
          NOSSOS PRODUTOS
        </Heading>
        <GridWrapper>
          {produtos.map((product, index) => (
            <div className="center" key={index}>
              <ProductCard
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

  const { data } = await client.query({ query: getTierProducts })

  // console.log(data.destaque.produtos[0])
  return {
    props: {
      produtos: data.destaque.produtos.map((produto: any) => produto.produto)
    },
    revalidate: 60
  }
}
