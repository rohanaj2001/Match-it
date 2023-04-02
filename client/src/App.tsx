import './App.css'
import { ChakraBaseProvider } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Theme from './Theme'
import ImageUploader from './components/ImageUploader'
import Result from './components/Result'
import Contact from './components/Contact'

function App() {
  return (
    <ChakraBaseProvider theme={Theme} >
      <Navbar/>
      <Home />
      <ImageUploader />
      <Result />
      <Contact/>
    </ChakraBaseProvider>
  )
}

export default App
