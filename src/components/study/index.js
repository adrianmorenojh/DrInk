import React from 'react'
import { Div, H1, Galery, Image } from './styles'
import { UseAutomaticImageChange } from '../../hooks/UseAutomaticImageChange'
export const Study = () => (
  <a name='study'>
    <Div>
      <H1>Estudio</H1>
      <Galery>
        <Image src={UseAutomaticImageChange()} />
      </Galery>
    </Div>
  </a>

)
