import * as S from './styles'
import Heading from 'components/Heading'
import Nuka from 'nuka-carousel'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'

export type CostumersProps = {
  costumers: Array<{
    img: string
    name: string
    testimony: string
  }>
}

type Trio = {
  data: Array<{
    name: string
    img: string
    testimony: string
  }>
}

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const Costumers = ({ costumers }: CostumersProps) => {
  return (
    <S.Wrapper>
      <Heading
        color="white100"
        font="ubuntu"
        lineBottomWidth={200}
        lineColor="yellow300"
        margin="0 0 50px 0"
        role="h2"
      >
        OQUE DIZEM NOSSOS CLIENTES
      </Heading>

      <Slider {...settings}>
        {costumers.map((costumer, index) => (
          <S.Costumer key={index}>
            <S.CostumerProfile src={costumer.img} alt={costumer.name} />
            <Heading
              color="yellow200"
              fontSize="large"
              role="h4"
              lineBottom={false}
            >
              {costumer.name}
            </Heading>

            <S.CostumerText>{costumer.testimony}</S.CostumerText>
          </S.Costumer>
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default Costumers
