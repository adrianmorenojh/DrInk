import styled from 'styled-components'

export const Header = styled.header`


    max-width:100vw;
    position: fixed;
    // padding: 5px 0;
    z-index: 2;
    top: 0;
    right:0;
    left:0;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
`

export const HeaderMenu = styled.div`
    height: 100%;
    display:flex;
    align-items: center;
    width:100%;
    justify-content:space-between;
    @media(max-width:768px){
        justify-content:space-around;
    }
    @media(max-width:480px){
        justify-content:center;
    }
    background: rgba(0, 0, 0, 0.6);

`
export const Ol = styled.ol`
    margin:0px;
    min-width: 340px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:0;
    margin: 0px 20px;
    @media(max-width:768px){
        margin: 0px 5px 0 0;
    }
`
export const Li = styled.li`
    cursor: pointer;
    list-style: none;
`
export const A = styled.a`
    text-decoration:none;
    color:white;
    :hover{
        opacity: .5;
    }
`
export const Logo = styled.div`
    padding: 7px 0 0px;
    margin: 0 20px;
    font-family: 'Lalezar', cursive;
    font-size: 45px;
    @media(max-width:768px){
        margin: 0 0 0 5px; 
    }
    @media(max-width:480px){
        display:none;
    }

      
`

export const P = styled.p`
    background-image: url(https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif);
	background-size: cover;
	color: transparent;
	-moz-background-clip: text;
	-webkit-background-clip: text;
	text-transform: uppercase;
    font-size: 55px;
	line-height: .75;
	margin: 10px 0;
`