import React from 'react'
import { GlobalStyle } from '../GlobalStyle'
import { Header } from './header'
import { SectionContainer } from './SectionContainer'
import { Contact } from './Contact'
const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <SectionContainer />
      <Contact />

    </div>
  )
}
export default App
