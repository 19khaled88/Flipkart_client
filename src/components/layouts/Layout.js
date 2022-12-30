import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
// import MenuHeader from '../MenuHeader'

const Layout = (props) => {
  return (
    <div>
      <Header />

      {/*  <MenuHeader /> */}
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
