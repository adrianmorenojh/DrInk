import styled from 'styled-components'

export const TattoContainer = styled.div`
    margin: 0 auto;
    padding: 100px 0 15px 0;
    box-shadow: 0 0 5px black;
`
export const CategoryContainer = styled.div`
    margin: 0 5px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px;
    justify-content: center;
    @media (max-width:1024px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width:768px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width:480px){
        grid-template-columns: repeat(2, 1fr);
    }
`
export const H1 = styled.h1`
    font-size:25px;
`
