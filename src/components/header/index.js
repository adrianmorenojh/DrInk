import React from 'react'
import { Header as HeaderM, HeaderMenu, Ol, Li } from './styles'

export const Header = () => (

  <HeaderM>
    <HeaderMenu>
      <Ol>
        <Li>
            Home
        </Li>
        <Li>
            Tattos
        </Li>
        <Li>
            Estudio
        </Li>
        <Li>
            artistas
        </Li>
        <Li>
            Contacto
        </Li>
        <Li>
            Ubicacion
        </Li>
      </Ol>
    </HeaderMenu>
  </HeaderM>
)
