import * as S from './styles'
import { useStateContext } from 'context'
import { useEffect, useState } from 'react'
import Nuka from 'nuka-carousel'
import Slider from 'react-slick'

export type GaleryProps = {
  images: Array<{
    url: string
  }>
  index?: number
}

const settings = {
  dots: false,
  infinite: false,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       initialSlide: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   }
  // ]
}

const ProductGalery = ({ images, index = 0 }: GaleryProps) => {
  const { server } = useStateContext()
  const [imageIndex, setImageIndex] = useState(index)

  // useEffect(() => {
  //   setImageIndex(0)
  // }, [])
  return (
    <S.Wrapper>
      <S.PreviewsWrapper className="desktop">
        {images?.map((image, index) => (
          <S.Preview
            key={index}
            image={server + image.url}
            onClick={() => {
              setImageIndex(index)
            }}
          >
            {/* <S.PreviewImage src={server + image.url} /> */}
          </S.Preview>
        ))}
      </S.PreviewsWrapper>

      <S.SelectedImageWrapper className="desktop">
        <S.SelectedImage
          src={
            images[imageIndex]
              ? server + images[imageIndex].url
              : server + images[0].url
          }
        />
      </S.SelectedImageWrapper>

      <div className="mobile">
        <Slider {...settings}>
          {images?.map((image, index) => (
            <img src={server + image.url} key={index} />
          ))}
        </Slider>
      </div>
    </S.Wrapper>
  )
}

export default ProductGalery
