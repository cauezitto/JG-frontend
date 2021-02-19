import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import CopyAndPayment from 'components/CopyAndPayment'

type TemplateProps = {
  children: React.ReactNode
}

const Default = ({ children }: TemplateProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CopyAndPayment />
    </>
  )
}

export default Default
