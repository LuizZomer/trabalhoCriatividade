import styled from "styled-components";

export const Container = styled.section`
    background-color: #F4F4F4;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 61px;

    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        text-align: center;
    }

`

export const ContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 540px;
    gap: 11px;

    @media (max-width: 900px) {
        max-width: none;
    }
`