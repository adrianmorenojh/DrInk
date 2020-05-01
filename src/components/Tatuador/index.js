import React from 'react'
import { Container, Foto, Image, Info, H4, P, Logo, Div } from './styles'

export const Tatuador = ({ name, especialidad, src }) => (
  <Container>
    <Foto>
      <Image src={src} alt='' />
      <Info>
        <H4>{name}</H4>
        <Div>
          <P>Especialidad : {especialidad}</P>
          <div>
            <a href='https://www.instagram.com/adrianmorenojh_'><Logo src='../../../public/assets/images/facebook-logo.svg' /></a>
            <a href='https://www.instagram.com/adrianmorenojh_'><Logo src='../../../public/assets/images/instagram.svg' /></a>
            <a href='https://www.instagram.com/adrianmorenojh_'><Logo src='../../../public/assets/images/twitter.svg' /></a>
          </div>
        </Div>

      </Info>
    </Foto>
  </Container>
)
