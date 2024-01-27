import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './components/BitcoinRates'
import Emoji from './components/Emoji'
import { MoodProvider } from './context/MoodContext'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <>
      <UserProvider>
        <MoodProvider>
          {/* <h1>Module 7 Labs</h1>
          <BitcoinRates /> */}
          {/* <Emoji /> */}
          <AppRoutes />
        </MoodProvider>
      </UserProvider>
    </>
  )
}

export default App
