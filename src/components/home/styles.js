import styled from 'styled-components'
import AOS from  'aos'

  AOS.init()

export const DivHero = styled.div`
    background-image: url("https://www.infiernotatuajes.com/wp-content/uploads/2019/12/estudio-tatuajes-sur-df-1.png");
    background-size:100% 100%;
    height: 100vh;
    box-shadow: 0 0 5px black;

`
export const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    height:100vh;
    padding: 0 20px 60px;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    data-aos="fade-left";
    data-aos-anchor="#example-anchor";
    data-aos-offset="1000";
    data-aos-duration="1000";
`

export const H1 = styled.h1`
    margin: 0px;
    width: 100%;
    text-align: center;
    font-size: 75px;
    font-style: normal;
    font-weight: bold;
    color: white;
    font-family: 'Cormorant',serif;

    font-family: 'Cormorant', serif;

    @media (max-width:480px){
        font-size:50px;
    }
`
export const H3 = styled.h3`
    width:100%;
    text-align:center;
    font-size: 35px;
    font-family: 'Cormorant', serif;
    color: snow;
    margin: 0px;
    font-weight: 600;
    opacity: 0.9;
        @media (max-width:480px){
        font-size:30px;
    }
`
export const P = styled.p`
    font-family: 'Cormorant', serif;
    color:snow;
    text-align:center;
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
    margin: 12px 0;
    opacity: .8;
}
`

