import React from 'react'
import { Div, Artistas, H1 } from './styles'
import { Tatuador } from '../Tatuador'

export const Artists = () => (
  <a name='artist'>
    <Div>
      <H1>Nuestros Artistas</H1>
      <Artistas>
        <Tatuador src='https://ep01.epimg.net/verne/imagenes/2019/01/04/articulo/1546616433_383738_1546708066_noticia_normal.jpg' name='luis lopex' especialidad='sombras' />
        <Tatuador src='https://i1.wp.com/www.tatuajesxd.com/wp-content/uploads/2018/09/Enojar-a-un-tatuador.jpg?fit=1062%2C600&ssl=1' name='luis lopex' especialidad='sombras' />
        <Tatuador src='https://media.aweita.larepublica.pe/678x508/aweita/imagen/2018/02/08/noticia-portada5_35.jpg' name='luis lopex' especialidad='sombras' />
        <Tatuador src='https://live.staticflickr.com/4142/5450564557_6ecf4f82cd_b.jpg' name='luis lopex' especialidad='sombras' />
        <Tatuador src='https://p1.pxfuel.com/preview/995/450/390/hand-glove-shoulder-arm.jpg' name='luis lopex' especialidad='sombras' />
        <Tatuador src='https://www.beautymarket.es/imagen/min14592.jpg' name='luis lopex' especialidad='sombras' />
      </Artistas>
    </Div>
  </a>
)
