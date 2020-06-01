import React, { useState } from 'react'
import { Container, ButtonContainer, Button } from './styles'
import { TattosContainer } from '../TattosContainer'

export const Category = () => {
  const [category, setCategory] = useState('tattos')

  // const handleClick = (e) => {
  //   setCategory('computer')
  //   e.preventDefault()
  // }
  return (
    <Container>
      <ButtonContainer>
        <Button onClick={() => setCategory('tattos')}>Todos</Button>
        <Button onClick={() => setCategory('nature')}>Realismo</Button>
        <Button onClick={() => setCategory('buildings')}>Sombras</Button>
        <Button onClick={() => setCategory('tatto')}>Nueva Escuela</Button>
        <Button onClick={() => setCategory('girls')}>Otros</Button>
      </ButtonContainer>

      <TattosContainer url={category} />
    </Container>
  )
}
