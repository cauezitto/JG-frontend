import Header from 'components/Header'
import Main from 'components/Main'
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

export default function Home() {
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
          {productsMock.map((product, index) => (
            <div className="center" key={index}>
              <ProductCard
                name={product.name}
                price={product.price}
                image={product.image}
              />
            </div>
          ))}
        </GridWrapper>
      </PaddingWrapper>
      <AboutSection />
      <PaddingWrapper>
        <HorizontalPaddingWrapper padding="xxxlarge">
          <Costumers costumers={costumersMock} />
        </HorizontalPaddingWrapper>
      </PaddingWrapper>
    </DefaultTemplate>
  )
}
