import styled from 'styled-components'

export const Header = styled.header`
    max-width:100vw;
    position: fixed;
    z-index: 2;
    top: 0;
    right:0;
    left:0;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
`

export const HeaderMenu = styled.div`
    height: 100%;
    display:flex;
    align-items: center;
    border: 3px solid black;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.6);

`
export const Ol = styled.ol`
   display:inline-flex;
    margin:0px;
    @media (max-width:480px){
        padding:0 5px;
    }
`
export const Li = styled.li`
    cursor: pointer;
    margin-right: 45px;
    list-style: none;
    @media (max-width:480px){
        margin-right:25px;
    }
`
export const A = styled.a`
    text-decoration:none;
    color:white;
`
