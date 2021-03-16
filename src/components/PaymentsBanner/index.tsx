import { Fragment } from 'react'
import { FiCreditCard, FiPackage } from 'react-icons/fi'
import { BiShoppingBag } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Nuka from 'nuka-carousel'
import * as S from './styles'

const PaymentsBanner = () => (
  <>
    <S.Wrapper>
      <S.SubWrapper>
        <Nuka
          autoplay
          autoplayInterval={8000}
          renderCenterLeftControls={({ previousSlide }) => (
            <IoIosArrowBack size="30" onClick={previousSlide} />
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <IoIosArrowForward size="30" onClick={nextSlide} />
          )}
        >
          {/* <S.Info mobile>
          {' '}
          <FiPackage /> &nbsp; <b>FRETE GRÁTIS</b> &nbsp; A PARTIR DE 5 PEÇAS
        </S.Info> */}
          <S.Info mobile>
            {' '}
            <FiCreditCard /> &nbsp; <b>PARCELE</b> &nbsp; EM ATÉ 12X
          </S.Info>
          <S.Info mobile>
            {' '}
            <BiShoppingBag /> &nbsp; <b>COMPRE</b> COM SEGURANÇA
          </S.Info>
        </Nuka>
      </S.SubWrapper>
    </S.Wrapper>
  </>
)

export default PaymentsBanner
