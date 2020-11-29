import React from 'react'
import { Container, Foto, Image, Info, H4, P, Logo, Div } from './styles'
import { ImFacebook2, ImTwitter, ImInstagram } from "react-icons/im";

export const Tatuador = ({ name, especialidad, src }) => {
  
  return(
    <Container >
      <Foto>
        <Image src={src} alt='' />
        <Info>
          <H4>{name}</H4>
          <Div>
            <P>Especialidad : {especialidad}</P>
            <Logo><ImFacebook2 /><ImTwitter/><ImInstagram/></Logo>
          </Div>
        </Info>
      </Foto>
    </Container>
)
}