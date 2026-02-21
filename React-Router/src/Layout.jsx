import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'   
import Home from './components/Home/Home'
import About from './components/Abouts/About'
import { Link } from 'react-router-dom'
import Contact from './components/contact/contact'




function Layout() {
  return (
    <>
    <Header/>
     <Outlet/>
    <Footer/>
    
    </>
  )
}

export default Layout
