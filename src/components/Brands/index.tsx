import * as S from './styles'
import Slider from 'react-slick'

export type BrandsProps = {
  brands: Array<{
    url: string
    alt: string
  }>
}

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
}

const Brands = ({ brands }: BrandsProps) => (
  <S.Wrapper>
    <Slider {...settings}>
      {brands.map((brand, index) => (
        <S.BrandWrapper key={index}>
          <img src={brand.url} alt={brand.alt} />
        </S.BrandWrapper>
      ))}
    </Slider>
  </S.Wrapper>
)

export default Brands
