import { useState } from 'react'
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
import { useCookies } from 'react-cookie'
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'

export type HeaderProps = {
  categorias: Array<{
    nome: string
  }>
}

const Header = ({ categorias = [] }: HeaderProps) => {
  const [cookie, setCookie] = useCookies(['user'])
  const { push, query, reload } = useRouter()
  const [show, setShow] = useState(false)
  const { nome_contains } = query
  const [search, setSearch] = useState(nome_contains)

  const handleFilter = async () => {
    await push({
      pathname: '/loja',
      query: {
        ...query,
        nome_contains: search
      }
    })
    // reload()
  }

  return (
    <S.Wrapper>
      <PaddingWrapper>
        <S.ContactWrapper>
          <div className="social-media">
            <S.ExteralLink href="https://www.facebook.com/jgemporiodamalha">
              <FaFacebookF />
            </S.ExteralLink>

            <S.ExteralLink href="https://www.instagram.com/jeffersonegisele/">
              <FaInstagram />
            </S.ExteralLink>
          </div>

          <div className="contact">
            <S.ExteralLink href="tel: 98127-6336" className="desktop">
              <FiPhone /> &nbsp; (11) 98127-6336
            </S.ExteralLink>

            <S.ExteralLink href="tel: 98127-6336" className="mobile">
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
          <Link href="/">
            <a>
              <S.Logo src="/img/logo3.png" alt="JG" />
            </a>
          </Link>
          {/* </div> */}

          <S.SearchInputWrapper className="desktop">
            <Input
              value={search as string}
              onChange={(e) => setSearch(e.target.value)}
            />
            &nbsp;
            <Button onClick={handleFilter} radius={10}>
              <FiSearch />
            </Button>
          </S.SearchInputWrapper>

          <div className="right mobile">
            <div className="login">
              <Link href="/dashboard/pedidos">
                <S.ExteralLink>
                  {cookie.token ? 'Perfil' : 'Login'} &nbsp; <IoIosArrowDown />
                </S.ExteralLink>
              </Link>
            </div>

            <div className="favorite">
              <S.ExteralLink
                iconColor="yellow300"
                href={
                  cookie.token
                    ? `/favoritos/${(jwt.decode(cookie.token) as any)?.id}`
                    : '/login'
                }
              >
                <FiHeart />
              </S.ExteralLink>
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
              <Link href="/carrinho">
                <a>
                  <FiShoppingCart />
                </a>
              </Link>
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
                  {categorias.map((categoria, index) => (
                    <li key={index}>
                      <Link
                        href={`/loja?categorias=${categoria.nome.replace(
                          ' ',
                          '+'
                        )}`}
                      >
                        <a>{categoria.nome}</a>
                      </Link>
                    </li>
                  ))}
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
                  <Link href="/loja">
                    <S.ExteralLink>Explorar</S.ExteralLink>
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
                  <Link
                    href={
                      cookie.token
                        ? `/favoritos/${(jwt.decode(cookie.token) as any)?.id}`
                        : '/login'
                    }
                  >
                    <S.ExteralLink>Meus Favoritos</S.ExteralLink>
                  </Link>
                </li>
              </ul>
            </S.Nav>

            <div className="input-wrapper mobile">
              <Input
                value={search as string}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Button radius={5} onClick={handleFilter}>
                <FiSearch />
              </Button>
            </div>
          </S.NavSubWrapper>
        </PaddingWrapper>
        <div className={`menu-mobile ${show ? '' : 'hide'} mobile`}>
          <MenuMobile categorias={categorias} />
        </div>
      </S.NavWrapper>
    </S.Wrapper>
  )
}

export default Header
