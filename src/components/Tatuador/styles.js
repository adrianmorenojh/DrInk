import styled from 'styled-components'

export const Container = styled.div`
    width:45%;
    margin: 10px 10px;
`

export const Foto = styled.div`
    position: relative;
    margin:auto;
`

export const Image = styled.img`
    width:100%;
    border-radius: 5px;
    box-shadow: 0 0 5px;

`
export const Info = styled.div` 
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    justify-content: center;
    opacity: 0;
    color:white;
    background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%);
    ${Foto}:hover & {
    opacity:1;
    }
`

export const H4 = styled.h4`
    font-size: 30px;
    margin: 325px 0 5px 15px;

`
export const P = styled.p`
    margin-left: 15px;
`
export const Logo = styled.img`
    width: 30px;
    background: white;
    border-radius: 30px;
    border: 1px solid white;
    margin-right: 5px;
`
export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
