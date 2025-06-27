import Header from '@/components/shared/header'
import Footer from '@/components/shared/header/footer'
import React from 'react'

const layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default layout