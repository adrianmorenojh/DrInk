import React from 'react'
import { Article1, Article2, Article3, Image } from './styles'

export const ImageContainer = ({ largeImageURL }) => {
  function getRandomArbitrary (min, max) {
    return Math.random() * (max - min) + min
  }
  const random = getRandomArbitrary(1, 3).toFixed()

  return (
    random == 1
      ? <Article1>
        <Image src={largeImageURL} />
      </Article1>
      : random == 2
        ? <Article2>
          <Image src={largeImageURL} />
          </Article2>
        : <Article3>
          <Image src={largeImageURL} />
        </Article3>
  )
}
