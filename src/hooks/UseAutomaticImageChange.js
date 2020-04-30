import { useState, useEffect } from 'react'

const Background =
[
  'https://lh3.googleusercontent.com/C3XcIOOB6g2Tcci21Gx1OzQhfxQtgASiMQv1iWWmOrPu9_KgNJ6Hcxzm3GI5a2zq3cwUO-6qyw=w1080-h608-p-no-v0',
  'https://www.infiernotatuajes.com/wp-content/uploads/2019/12/estudio-tatuajes-perforaciones-1.png',
  'https://www.infiernotatuajes.com/wp-content/uploads/2019/12/estudio-tatuajes-delegacion-coyoacan.png',
  'https://1.bp.blogspot.com/-XDR8cwffPrc/XUqVS2P3zOI/AAAAAAAALDo/juuAaitINfcbibCh0rVs0OT4VnFp1EeRwCLcBGAs/s1600/estudio%2Bde%2Btatuajes.jpg'
]

export const UseAutomaticImageChange = () => {
  const [state, setState] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setState(state => state === 3 ? state - 3 : state + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const Url = Background[state]

  return (Url)
}
