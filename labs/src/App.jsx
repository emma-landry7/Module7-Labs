import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './components/BitcoinRates'
import Emoji from './components/Emoji'
import { MoodProvider } from './context/MoodContext'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      {/* <MoodProvider> */}
        {/* <h1>Module 7 Labs</h1>
        <BitcoinRates /> */}
        {/* <Emoji /> */}
        <AppRoutes />
      {/* </MoodProvider> */}
    </>
  )
}

export default App
