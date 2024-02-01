import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import App from './App.jsx'
import './index.css'
import { mode } from '@chakra-ui/theme-tools'
import { color } from 'framer-motion'


const styles = {
  global:(props) => ({
    body: {
      bg: mode("gray.100", "#000")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  })
}
const config = {
  initialColorMode: 'light',
  userSystemColorMode: false,
}

const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
