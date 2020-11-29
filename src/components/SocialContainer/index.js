import React from 'react'
import { Form, Title, Div, Input, Text, Button, Image, Redes } from './styles'

export const SocialContainer = () => (
  <Form>
    <Title>Contactanos!</Title>
    <Redes>

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
