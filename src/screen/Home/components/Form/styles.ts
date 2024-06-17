import styled from "styled-components";
import dog from '../../assets/dog.svg'

export const  Container = styled.section`
    background: url(${dog});
    background-repeat: no-repeat;
    background-size: cover;
    height: 727px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 160px;

    @media (max-width: 900px) {
        justify-content: center;
        padding: 0 20px;
    }
`

export const FormContainer = styled.div`
    max-width: 611px;
    background-color: white;
    padding: 39px 71px;
    border-radius: 15px;

    @media (max-width:900px) {
        max-width: none;
        padding: 10px 20px; 
    }
`

export const Form = styled.form`
    margin-top: 47px;
    display: flex;
    flex-direction: column;
    gap: 23px;
`