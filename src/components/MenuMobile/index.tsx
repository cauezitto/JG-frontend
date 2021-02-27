import Button from 'components/Button'
import * as S from './styles'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { useCookies } from 'react-cookie'

const MenuMobile = () => {
  const [cookie, setCookie] = useCookies(['user'])
  return (
    <S.Wrapper>
      {!cookie.user && (
        <S.AccountWrapper className="mobile-account-wrapper">
          <Link href="/login">
            <a>
              <Button fill="gray100">Login</Button>
            </a>
          </Link>
          <Link href="/cadastro">
            <a>
              <Button>Cadastro</Button>
            </a>
          </Link>
        </S.AccountWrapper>
      )}
      <Link href="/loja">
        <S.NavigationLink>
          Clube nacional <IoIosArrowForward />
        </S.NavigationLink>
      </Link>

      <Link href="/loja">
        <S.NavigationLink>
          Clube nacional <IoIosArrowForward />
        </S.NavigationLink>
      </Link>

      <Link href="/loja">
        <S.NavigationLink>
          Clube nacional <IoIosArrowForward />
        </S.NavigationLink>
      </Link>

      <Link href="/loja">
        <S.NavigationLink>
          Clube nacional <IoIosArrowForward />
        </S.NavigationLink>
      </Link>

      <Link href="/loja">
        <S.NavigationLink>
          Clube nacional <IoIosArrowForward />
        </S.NavigationLink>
      </Link>

      <S.DefaultPagesNavigationWrapper>
        <Link href="/">
          <S.DefaultLink>Home</S.DefaultLink>
        </Link>

        <Link href="/dashboard/pedidos">
          <S.DefaultLink>Meus Pedidos</S.DefaultLink>
        </Link>

        <Link href="/favoritos">
          <S.DefaultLink>Meus Favoritos</S.DefaultLink>
        </Link>

        <Link href="/sobre">
          <S.DefaultLink>Sobre Nós</S.DefaultLink>
        </Link>

        <Link href="/contato">
          <S.DefaultLink>Nos Contate</S.DefaultLink>
        </Link>
      </S.DefaultPagesNavigationWrapper>
    </S.Wrapper>
  )
}

export default MenuMobile
