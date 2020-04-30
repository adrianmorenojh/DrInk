import React from 'react'
import { DivHero, H1, H3, Title, Buscador, Input, Button } from './styles'

export const Home = () => {
  return (
    <DivHero>

      <H1>
            Dr.Ink!
      </H1>
      <H3>
            Arte y Tinta en tu piel.
      </H3>
      <Title>
        <p>
                Artistas Especializados en diferentes estilos para guiarte en la busqueda de tu siguiente Tatto.
        </p>
      </Title>
      <Buscador>
        <Input
          type='search'
          id='search'
          name='q'
          placeholder='Encuentra tu proximo tatto!'
        />
        <Button>Buscar</Button>
      </Buscador>
    </DivHero>
  )
}
