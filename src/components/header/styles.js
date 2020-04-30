import styled from 'styled-components'

export const Header = styled.header`
    border: 3px solid black;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    z-index: 2;
    top: 0;
    right:33%;
    max-width: 40%;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    /* background-image: url("https://www.infiernotatuajes.com/wp-content/uploads/2019/12/estudio-tatuajes-sur-df-1.png"); */
    /* background-size: 100%; */
`

export const HeaderMenu = styled.div`
    height: 100%;
    display:flex;
    align-items: center;

`
export const Ol = styled.ol`
   display:inline-flex;
    margin:0px;

`
export const Li = styled.li`
    cursor: pointer;
    margin-right: 45px;
    list-style: none;
`
