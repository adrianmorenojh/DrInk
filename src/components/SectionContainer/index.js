import React from 'react'
import { Container } from './styles'
import { Home } from '../home'
import { Category } from '../category'
import { Study } from '../study'
import { Artists } from '../artists'

export const SectionContainer = () => (
  <>
    <Home />
    <Container>
      <Category />
      <Study />
      <Artists />
    </Container>
  </>
)
