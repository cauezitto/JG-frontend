import BottomMenu from 'components/BottomMenu'
import Menu from 'components/Menu'
import Wrapper from 'components/PaddingWrapper'
import React from 'react'
import Container from 'styles/pages/dashboard'
import PrivateRoute from 'components/PrivateRoute'
export type Props = {
  children: React.ReactNode
  paddingSmall?: boolean
}

const Dashboard = (props: Props) => {
  return (
    <PrivateRoute>
      <Container {...props}>
        <div className="desktop">
          <Menu />
        </div>
        <div className="content">{props.children}</div>
        <div className="mobile">
          <BottomMenu />
        </div>
      </Container>
    </PrivateRoute>
  )
}

export default Dashboard
