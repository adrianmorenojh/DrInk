import React, { useState, useEffect } from 'react'
import { TattoContainer, CategoryContainer, H1 } from './styles'
import { ImageContainer } from '../ImageContainer'

export const TattosContainer = ({ url }) => {
  const [tatto, setTatto] = useState([])
  const [state, setState] = useState([])
  useEffect(() => {
    setState(url)
  })

  useEffect(() => {
    window.fetch(`https://pixabay.com/api/?key=14217170-67091f69280d11e8fd820524a&q=${state}`)
      .then(response => response.json())
      .then(data => setTatto(data))
  }, [state])

  console.log(tatto.hits)
  return tatto.length === 0 ? <H1>loading...</H1>

    : <TattoContainer>
      <CategoryContainer>
        {
          tatto.hits.map(item => <ImageContainer key={item.id} {...item} />)
        }

      </CategoryContainer>
    </TattoContainer>
}
