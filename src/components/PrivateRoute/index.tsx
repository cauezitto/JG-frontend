import { useStateContext } from 'context'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = null
  if (!data) {
    console.log('redirecionado')
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {} // will be passed to the page component as props
  }
}

const PrivateRoute: React.FC = ({ children }) => {
  const router = useRouter()
  const { setToken, token } = useStateContext()
  const logout = () => {
    setToken(null)
    //tokenStorageHandler.eraseToken()
    router.push('/login')
  }
  // useEffect(() => {
  //   logout()
  // }, [])
  return <>{children}</>
}

export default PrivateRoute
