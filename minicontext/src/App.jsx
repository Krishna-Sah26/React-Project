import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

import './App.css'
import UserContextProvider from './context/usercontextprovider'

function App() {
  
  return (
    <UserContextProvider>
    <h1>hello shrare is a imporatance</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>

  )
}

export default App
