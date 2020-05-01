import React, { useState, useEffect } from 'react'
import { TattoContainer, CategoryContainer, H1 } from './styles'
import { ImageContainer } from '../ImageContainer'

function useFetchData ({ url }) {
  const [tatto, setTatto] = useState([])
  useEffect(() => {
    window.fetch(`https://pixabay.com/api/?key=14217170-67091f69280d11e8fd820524a&q=${url}`)
      .then(response => response.json())
      .then(data => setTatto(data))
  }, [url])
  return { tatto }
}

export const TattosContainer = ({ url }) => {
  const { tatto } = useFetchData({ url })
  return (tatto.length === 0 ? <H1>loading...</H1>

    : <a name='tattos'>
      <TattoContainer>
        <CategoryContainer>
          {
            tatto.hits.map(item => <ImageContainer key={item.id} {...item} />)
          }

        </CategoryContainer>
      </TattoContainer>
    </a>
  )
}
