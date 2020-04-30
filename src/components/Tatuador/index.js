import React from 'react'
import { Container, Foto, Image, Info, H4, P, Logo, Div } from './styles'

export const Tatuador = () => (
  <Container>
    <Foto>
      <Image src='https://d36tnp772eyphs.cloudfront.net/blogs/2/2016/05/lugares-increibles-de-Estados-Unidos.jpg' alt='' />
      <Info>
        <H4>nombre y apellido</H4>
        <Div>
          <P>Especialidad : Realismo Y Sombras.</P>
          <div>
            <Logo src='../../../public/assets/images/facebook-logo.svg' />
            <Logo src='../../../public/assets/images/instagram.svg' />
            <Logo src='../../../public/assets/images/twitter.svg' />
          </div>
        </Div>

      </Info>
    </Foto>
  </Container>
)
