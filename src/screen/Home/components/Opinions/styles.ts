import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
    margin-top: 80px;
    
    @media (max-width: 900px) {
        text-align: center;
    }
`

export const GridOpnionsContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(303px, 500px) minmax(303px, 505px);
    align-content: center;
    gap: 32px;
    margin-top: 70px;

    @media (max-width:900px) {
        grid-template-columns: repeat(auto-fill, minmax(303px, 500px)) ;

    }
`