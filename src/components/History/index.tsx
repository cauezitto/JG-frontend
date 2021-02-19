import * as S from './styles'
import { useState } from 'react'

const History = () => {
  const [points, setPoints] = useState([true, false, false])

  return (
    <S.Wrapper>
      <S.Line>
        <S.Point
          selected={points[0]}
          onClick={() => setPoints([true, false, false])}
        >
          <img src="/img/sobre/ball.png" alt="bola" />
        </S.Point>
        <S.Point
          selected={points[1]}
          onClick={() => setPoints([false, true, false])}
        >
          <img src="/img/sobre/ball.png" alt="bola" />
        </S.Point>
        <S.Point
          selected={points[2]}
          onClick={() => setPoints([false, false, true])}
        >
          <img src="/img/sobre/ball.png" alt="bola" />
        </S.Point>
      </S.Line>

      <S.Paragraph selected={points[0]}>
        Iniciamos em 2019 a <b>importação de camisas</b> para nosso própio uso.
        Logo nossos familiares e amigos começaram a nos pedir para encomendar
        &nbsp;
        <b>camisetas personalizadas</b> que não conseguiam encontrar facilmente
        no Brasil...
      </S.Paragraph>

      <S.Paragraph selected={points[1]}>
        Após diversas recomendações, já estavamos conseguindo fazer uma boa
        renda extra vendendo pelo nosso{' '}
        <b>
          <a href="https://www.facebook.com/jgemporiodamalha">facebook</a>
        </b>{' '}
        e{' '}
        <b>
          <a href="https://www.instagram.com/jeffersonegisele/">instagram</a>
        </b>{' '}
        , e com o passar do tempo começamos a alcançar diversas partes do Brasil
      </S.Paragraph>

      <S.Paragraph selected={points[2]}>
        Hoje somo a <b>J|G Empório Da Malha.</b> onde você encontra desde o
        manto do seu time do coração, até as mais variadas marcas e estilos
      </S.Paragraph>
    </S.Wrapper>
  )
}

export default History
