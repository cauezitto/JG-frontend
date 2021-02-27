import { createContext, useContext, useState, useEffect } from 'react'
import CartProps from 'types/CartProps'
import UserProps from 'types/UserProps'
import handleCartStorage from 'utils/handleCart'
import { useCookies } from 'react-cookie'

type SetValue = (value: any) => void
type SetUserValue = (value: UserProps | null) => void
type SetTokenValue = (value: string | null) => void
interface ContextProps {
  cart: CartProps
  setCart: SetValue
  user: UserProps | null
  setUser: SetUserValue
  token: string | null
  setToken: SetTokenValue
  server: string
}
const Context = createContext<ContextProps | null>(null)

const StatesProvider: React.FC = ({ children }) => {
  const [server, setServer] = useState('')
  const [cart, setCart] = useState<CartProps>({
    products: [],
    total: 0
  })
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<UserProps | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [cookie, setCookie] = useCookies(['user'])

  useEffect(() => {
    if (!isLoading) {
      handleCartStorage.addToCart(cart)
      setCookie('cart', cart, {
        path: '/',
        maxAge: 604800, // Expires after 1hr
        sameSite: true
      })
    }
  }, [cart])

  useEffect(() => {
    setIsLoading(false)
    setCart(handleCartStorage.getCart())
    setUser(cookie.user)
    setCookie('cart', handleCartStorage.getCart(), {
      path: '/',
      maxAge: 604800, // Expires after 1hr
      sameSite: true
    })

    setServer(
      process.env.NEXT_PUBLIC_SERVER_HOST
        ? process.env.NEXT_PUBLIC_SERVER_HOST
        : ''
    )
  }, [])

  return (
    <Context.Provider
      value={{ server, token, setToken, user, setUser, cart, setCart }}
    >
      {children}
    </Context.Provider>
  )
}

export default StatesProvider

export const useStateContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Use count precisa estar dentro de um provider')
  }

  const { server, token, setToken, user, setUser, cart, setCart } = context

  return { server, token, setToken, user, setUser, cart, setCart }
}
