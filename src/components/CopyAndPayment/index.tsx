import * as S from './styles'
import PaddingWrapper from 'components/PaddingWrapper'
import Heading from 'components/Heading'
import Image from 'next/image'

const CopyAndPayment = () => (
  <S.Wrapper>
    <PaddingWrapper>
      <S.StampsAndPayment>
        <div className="payments">
          <Heading
            role="h4"
            fontSize="xlarge"
            margin="0 0 10px 0"
            textAlign="left"
            lineBottom={false}
          >
            PAGUE COM
          </Heading>

          <img
            src="/img/payments.png"
            width={200}
            height={40}
            alt="meios de cartão de crédito aceitos: Dinners, mastercard visa Elo"
          />
        </div>
        <div className="stamps">
          <Heading
            role="h4"
            fontSize="xlarge"
            margin="0 0 10px 0"
            textAlign="left"
            lineBottom={false}
          >
            SELOS
          </Heading>

          <img
            src="/img/selos.png"
            width={250}
            height={70}
            alt="site seguro e verificado por google safe browsing e compra garantida"
          />
        </div>
      </S.StampsAndPayment>
    </PaddingWrapper>
    <hr />

    <S.CopyWriteWrapper>
      JG © 2021 | Todos os direitos reservados.
    </S.CopyWriteWrapper>
  </S.Wrapper>
)

export default CopyAndPayment
