import styled from 'styled-components'

export const Form = styled.form`
 box-sizing: border-box;
  width: 50%;
  padding: 20px 50px;
  color:white;
  @media(max-width:768px){
    padding:20px 20px;
  }
   @media(max-width:768px){
    width: 380px;
  }
  
`
export const Title = styled.h4`
  font-size: 25px;
  color: white;
  margin-bottom: 10px;
`

export const Input = styled.input`
  display: flex;
  border: 1px solid green;
  border-radius: 10px;
  height: 30px;
  margin: 3px;
  padding-left: 1em;
  width: 50%;
  box-shadow: 1px 1px 5px;
`
export const Button = styled.input`
display:flex;
justify-content:center;
  border: 1px solid #0f1c10;
  border-radius: 10px;
  width: 25%;
  height: 35px;
  color: white;
  font-size: 1em;
  background-color: #143018;;
`
export const Text = styled.textarea`
  width: 100%;
  height: 225px;
  border: 1px solid green;
  border-radius: 10px;
  padding: 5px 0 0 5px;
  box-shadow: 1px 1px 5px ;
`

export const Div = styled.div`
  display:flex;
`
export const Image = styled.img`
  width:50px;
  background: white;
  border-radius: 30px;
  border: 1px solid white;
  margin: 10px 10px 0;

`
export const Redes = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
`
