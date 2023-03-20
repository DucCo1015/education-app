import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../router/Routers'

const Layout = () => {
  return (
    <div>
       <Header/>
       <div>
         <Routers />
       </div>
       <Footer/>                 
    </div>
  )
}

export default Layout