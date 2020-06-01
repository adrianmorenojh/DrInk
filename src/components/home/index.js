import React from 'react'
import { DivHero, H1, H3, Title, Social, A, Div, Background } from './styles'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../styles/Icons'
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
                <A href='https://www.instagram.com/adrianmorenojh_'><FacebookIcon alto={60} ancho={60} /></A>
                <A href='https://www.instagram.com/adrianmorenojh_'><InstagramIcon alto={60} ancho={60} /></A>
                <A href='https://www.instagram.com/adrianmorenojh_'><TwitterIcon alto={60} ancho={60} /></A>
              </div>
            </Social>
          </Div>
        </Background>
      </DivHero>
    </a>
  )
}
