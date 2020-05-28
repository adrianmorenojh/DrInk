import styled from 'styled-components'

export const Container = styled.div`
    position: relative; 
`

export const ButtonContainer = styled.div`
    height: 100px;
    padding-top: 30px;
    padding-bottom: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
`

export const Button = styled.button`
    margin: 0px 10px;
    border:2px solid white;
    border-radius: 10px;
    padding:0 5px;
    background-color:rgba(255, 255, 255, 0.877);
    cursor: pointer;
    @media(max-width:480px){
        margin: 0 5px;
    }
`
