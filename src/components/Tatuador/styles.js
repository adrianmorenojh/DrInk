import styled, { keyframes } from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const Container = styled.div`
    width:45%;
    max-width:500px;
    margin: 10px 10px;
    max-height:370px;
    animation-name: visible;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    @media (max-width:768px){
        width:90%;
    }
    @media (max-width:480px){
        width:400px;
    }
`

export const Foto = styled.div`
    position: relative;
    margin:auto;
    animation: animation 1001ms linear both;
`

export const Image = styled.img`
width:100%;
    border-radius: 5px;
    box-shadow: 0 0 5px;
    height: 370px;
    max-height:370px;

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
    ${fadeIn()};
    };
`

export const H4 = styled.h4`
    font-size: 30px;
    margin: 280px 0 5px 15px;

`
export const P = styled.p`
    margin-left: 15px;
`
export const Logo = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width: 75px;
    color:white;
`
export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
