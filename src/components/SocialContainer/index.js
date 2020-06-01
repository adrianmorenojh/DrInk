import React from 'react'
import { Form, Title, Div, Input, Text, Button, Image, Redes } from './styles'
import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../styles/Icons'
export const SocialContainer = () => (
  <Form>
    <Title>Contactanos!</Title>
    <Redes>
      <a href='https://www.instagram.com/adrianmorenojh_'><FacebookIcon alto={60} ancho={60} /></a>
      <a href='https://www.instagram.com/adrianmorenojh_'><InstagramIcon alto={60} ancho={60} /></a>
      <a href='https://www.instagram.com/adrianmorenojh_'><TwitterIcon alto={60} ancho={60} /></a>
    </Redes>
    <h3>O envianos un mensaje y te contactaremos de inmediato. </h3>
    <Div>
      <Input type='text' placeholder='Name' />
      <Input type='email' placeholder='Email' />
    </Div>
    <Text placeholder='Escribe Tu Mensaje' />
    <Button type='submit' placeholder='enviar' />
  </Form>

)
