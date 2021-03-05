import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import CopyAndPayment from 'components/CopyAndPayment'

type TemplateProps = {
  children: React.ReactNode
  categorias: Array<{
    nome: string
  }>
}

const Default = ({ children, categorias }: TemplateProps) => {
  return (
    <>
      <Header categorias={categorias} />
      {children}
      <Footer categorias={categorias} />
      <CopyAndPayment />
    </>
  )
}

export default Default
