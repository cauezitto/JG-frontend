import PaddingWrapper from 'components/PaddingWrapper'
import Button from 'components/Button'
import * as S from './styles'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import {
  FiPhone,
  FiMail,
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiHeart
} from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import Input from 'components/Input'
import Link from 'next/link'
import MenuMobile from 'components/MenuMobile'
import { useState } from 'react'

const Header = () => {
  const [show, setShow] = useState(false)
  return (
    <S.Wrapper>
      <PaddingWrapper>
        <S.ContactWrapper>
          <div className="social-media">
            <S.ExteralLink href="https://www.instagram.com/jeffersonegisele/">
              <FaFacebookF />
            </S.ExteralLink>

            <S.ExteralLink href="https://www.facebook.com/jgemporiodamalha">
              <FaInstagram />
            </S.ExteralLink>
          </div>

          <div className="contact">
            <S.ExteralLink href="tel: 97365-1131" className="desktop">
              <FiPhone /> &nbsp; (11) 97365-1131
            </S.ExteralLink>

            <S.ExteralLink href="tel: 97365-1131" className="mobile">
              <FiPhone />
            </S.ExteralLink>
            <div className="divisor" />
            <S.ExteralLink
              href="mailto: contato@jgemporiodamalha.com.br"
              className="desktop"
            >
              <FiMail /> &nbsp; contato@jgemporiodamalha
            </S.ExteralLink>

            <S.ExteralLink
              href="mailto: contato@jgemporiodamalha.com.br"
              className="mobile"
            >
              <FiMail />
            </S.ExteralLink>
          </div>
        </S.ContactWrapper>
        <S.SearchWrapper>
          {/* <div className="logo"> */}
          <S.Logo src="/img/logo3.png" alt="JG" />
          {/* </div> */}

          <S.SearchInputWrapper className="desktop">
            <Input />
            &nbsp;
            <Button radius={10}>
              <FiSearch />
            </Button>
          </S.SearchInputWrapper>

          <div className="right mobile">
            <div className="login">
              Login &nbsp; <IoIosArrowDown />
            </div>

            <div className="favorite">
              <FiHeart />
            </div>
          </div>

          <div className="left mobile">
            <div
              className="menu"
              onClick={() => {
                setShow(!show)
                // alert('foi')
              }}
            >
              <FiMenu />
            </div>
            &nbsp;
            <div className="cart">
              <FiShoppingCart />
            </div>
          </div>

          <div className="my-acount">
            <Link href="/dashboard/pedidos">
              <S.ExteralLink iconColor="yellow300" className="desktop">
                Minha conta &nbsp; <IoIosArrowDown />{' '}
              </S.ExteralLink>
            </Link>
          </div>

          <div className="shopping-cart">
            <Link href="/carrinho">
              <S.ExteralLink iconColor="yellow300" className="desktop">
                <FiShoppingCart />
              </S.ExteralLink>
            </Link>
          </div>
        </S.SearchWrapper>
      </PaddingWrapper>

      <S.NavWrapper>
        <PaddingWrapper>
          <S.NavSubWrapper>
            <S.Dropdown className="desktop">
              <S.CategoriesWrapper>
                {' '}
                <FiMenu /> &nbsp; TODAS AS CATEGORIAS
              </S.CategoriesWrapper>

              <S.DropMenu className="menu">
                <ul>
                  <li>Camisetas</li>
                  <li>Agasalhos</li>
                  <li>Agasalhos</li>
                  <li>Agasalhos</li>
                  <li>Agasalhos</li>
                </ul>
              </S.DropMenu>
            </S.Dropdown>

            <S.Nav className="desktop">
              <ul>
                <li>
                  <Link href="/">
                    <S.ExteralLink>Home</S.ExteralLink>
                  </Link>
                </li>

                <li>
                  <Link href="/loja/camisetas">
                    <S.ExteralLink>Camisetas</S.ExteralLink>
                  </Link>
                </li>

                <li>
                  <Link href="/sobre">
                    <S.ExteralLink>Sobre Nós</S.ExteralLink>
                  </Link>
                </li>

                <li>
                  <Link href="contato">
                    <S.ExteralLink>Nos Contate</S.ExteralLink>
                  </Link>
                </li>

                <li>
                  <Link href="favoritos">
                    <S.ExteralLink>Meus Favoritos</S.ExteralLink>
                  </Link>
                </li>
              </ul>
            </S.Nav>

            <div className="input-wrapper mobile">
              <Input />

              <Button radius={5}>
                <FiSearch />
              </Button>
            </div>
          </S.NavSubWrapper>
        </PaddingWrapper>
        <div className={`menu-mobile ${show ? '' : 'hide'} mobile`}>
          <MenuMobile />
        </div>
      </S.NavWrapper>
    </S.Wrapper>
  )
}

export default Header
