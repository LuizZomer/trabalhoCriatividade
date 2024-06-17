import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1190px;
    margin: 70px auto;
    gap: 15px;

    @media (max-width: 900px) {
        text-align: center;
        padding: 0 10px;
    }
`

export const ContainerList = styled.div`
    margin-left: 20px;

    >ol{
        padding-right: 20px;
    }

    >ol > li {
        line-height: 30px;
    }
`

export const ImageContainer = styled.div`
    margin-top: 40px;
`