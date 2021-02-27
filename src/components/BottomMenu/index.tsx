import * as S from './styles'
import Link from 'next/link'
import { FiPower } from 'react-icons/fi'
import { MdInsertEmoticon } from 'react-icons/md'
import { BiCube } from 'react-icons/bi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import { useStateContext } from 'context'
import { BiLogOut } from 'react-icons/bi'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

const BottomMenu = () => {
  const router = useRouter()
  const { setToken } = useStateContext()
  const [cookie, setCookie, removeCookie] = useCookies(['user'])
  const logout = () => {
    setToken(null)
    removeCookie('token', {
      path: '/',
      sameSite: true
    })
    router.push('/login')
  }

  return (
    <S.Wrapper>
      <div className="sub-wrapper">
        <Link href="/dashboard/dados-pessoais/" passHref>
          <a>
            <MdInsertEmoticon />
          </a>
        </Link>

        <Link href="/" passHref>
          <a>
            <BiLogOut />
          </a>
        </Link>

        <button>
          <FiPower onClick={logout} />
        </button>

        <Link href="/dashboard/contato/" passHref>
          <a>
            <HiOutlineChatAlt2 />
          </a>
        </Link>

        <Link href="/dashboard/pedidos/" passHref>
          <a>
            <BiCube />
          </a>
        </Link>
      </div>
    </S.Wrapper>
  )
}

export default BottomMenu
