import React from 'react'
import { Header as HeaderM, HeaderMenu, Ol, Li, A } from './styles'

export const Header = () => (

  <HeaderM>
    <HeaderMenu>
      <Ol>

        <Li>
          <A href='#home'>Home </A>
        </Li>

        <Li>
          <A href='#tattos'>Tattos</A>
        </Li>
        <Li>
          <A href='#study'> Estudio</A>
        </Li>
        <Li>
          <A href='#artist'>artistas</A>
        </Li>
        <Li>
          <A href='#contact'>Contact </A>
        </Li>
      </Ol>
    </HeaderMenu>
  </HeaderM>
)
