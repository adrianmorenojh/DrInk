import React from 'react'
import { GlobalStyle } from '../GlobalStyle'
import { Header } from './header'
import { SectionContainer } from './SectionContainer'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <SectionContainer />
    </div>
  )
}
export default App
