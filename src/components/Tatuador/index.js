import React from 'react'
import { Container, Foto, Image, Info, H4, P, Logo, Div } from './styles'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../styles/Icons'
export const Tatuador = ({ name, especialidad, src }) => (
  <Container>
    <Foto>
      <Image src={src} alt='' />
      <Info>
        <H4>{name}</H4>
        <Div>
          <P>Especialidad : {especialidad}</P>
          <div>
            <a href='https://www.instagram.com/adrianmorenojh_'><FacebookIcon alto='30' ancho='30' /></a>
            <a href='https://www.instagram.com/adrianmorenojh_'><InstagramIcon alto='30' ancho='30' /></a>
            <a href='https://www.instagram.com/adrianmorenojh_'><TwitterIcon alto='30' ancho='30' /></a>
          </div>
        </Div>

      </Info>
    </Foto>
  </Container>
)
