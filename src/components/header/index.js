import React from 'react'
import { Header as HeaderM, HeaderMenu, Ol, Li, A, Logo, P } from './styles'

export const Header = () => (

  <HeaderM>
    <HeaderMenu>
      <Logo><P>DR.INK</P></Logo>
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
