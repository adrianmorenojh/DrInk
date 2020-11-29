import React from 'react'
import { DivHero, H1, H3, Background, P } from './styles'

export const Home = () => {
  return (
    <a name='home'>
      <DivHero>
        <Background>  
          <div  >
            <H1  >
              Dr.Ink!
            </H1>
            <H3>
              Arte y Tinta en tu piel.
            </H3>
            <P>Trae tus ideas y la nosotros la convertiremos en un gran tatuaje. </P>
          </div>
        </Background>
      </DivHero>
    </a>
  )
}
