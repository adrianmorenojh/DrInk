import React from 'react'
import { DivHero, H1, H3, Title, Social, Image, Div, Background } from './styles'

export const Home = () => {
  return (
    <a name='home'>
      <DivHero>
        <Background>
          <H1>
            Dr.Ink!
          </H1>
          <H3>
            Arte y Tinta en tu piel.
          </H3>
          <Div>

            <Title>
              <p>
                Artistas Especializados en diferentes estilos para guiarte en la busqueda de tu siguiente Tatto.
              </p>
            </Title>

            <Social>
              <div>
                <h1>Nuestras Redes</h1>
                <a href='https://www.instagram.com/adrianmorenojh_'><Image src='./assets/images/facebook-logo.svg' /></a>
                <a href='https://www.instagram.com/adrianmorenojh_'><Image src='../../../public/assets/images/instagram.svg' /></a>
                <a href='https://www.instagram.com/adrianmorenojh_'><Image src='../../../public/assets/images/twitter.svg' /></a>
              </div>
            </Social>
          </Div>
        </Background>
      </DivHero>
    </a>
  )
}
