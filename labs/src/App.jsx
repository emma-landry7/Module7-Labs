import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BitcoinRates from './components/BitcoinRates'
import Emoji from './components/Emoji'
import { MoodProvider } from './context/MoodContext'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/UserContext'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <>
      <UserProvider>
        <ThemeProvider theme={darkTheme}>
          <MoodProvider>
            <CssBaseline />
            {/* <h1>Module 7 Labs</h1>
            <BitcoinRates /> */}
            {/* <Emoji /> */}
            <AppRoutes />
          </MoodProvider>
        </ThemeProvider>
      </UserProvider>
    </>
  )
}

export default App
