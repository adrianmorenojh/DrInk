import styled from 'styled-components'

export const DivHero = styled.div`
    background-image: url("https://www.infiernotatuajes.com/wp-content/uploads/2019/12/estudio-tatuajes-sur-df-1.png");
    background-size:100% 100%;
    height: 100vh;
    box-shadow: 0 0 5px black;
`
export const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    height:100vh;
    padding-top:150px;
    box-sizing:border-box;
    @media (max-width:768px){
        padding: 150px 30px 0;
    }
    @media (max-width:480px){
        padding: 115px 20px 0;
    }

`
export const Div = styled.div`
    display: flex;
    flex-wrap:wrap;
`

export const H1 = styled.h1`
    margin:0px;
    width:100%;
    text-align:center;
    font-size: 60px;
    color: snow;
    @media (max-width:480px){
        font-size:50px;
    }
`
export const H3 = styled.h3`
    width:100%;
    text-align:center;
    font-size: 35px;
    color: snow;
        @media (max-width:480px){
        font-size:30px;
    }
`
export const Title = styled.div`
    padding:0 50px;
    text-align:center;
    width: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 30px;
    color:snow;
    box-sizing: border-box;
    @media (max-width : 1024px){
        width:100%;
    }
    @media (max-width:768px){
        padding: 0;
    }
        @media (max-width:480px){
        font-size:25px;
    }

`
export const Social = styled.div`
    width:50%;  
    display: flex;
    justify-content:center;
    align-items:center;
    color:white;
    text-align:center; 
    @media (max-width : 1024px){
        width:100%;
    }

`
export const Image = styled.img`
    width:70px;
    border:1px solid white;
    border-radius:30px;
    background:white;
    margin: 0 10px;
    @media (max-width:480px){
        width:55px;
    }
`
