import React from 'react'
import { GlobalStyle } from '../GlobalStyle'
import { Header } from './header'
import { SectionContainer } from './SectionContainer'
import { Contact } from './Contact'
import { Footer } from './footer'
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <SectionContainer />
      <Contact />
      <Footer />
    </div>
  )
}
export default App
