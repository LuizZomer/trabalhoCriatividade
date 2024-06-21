import styled from "styled-components";
import dog from '../../assets/dog.svg'

export const  Container = styled.section`
    background: url(${dog});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    padding: 20px;
    justify-content: flex-end;
    align-items: center;
    padding-right: 160px;

    @media (max-width: 900px) {
        justify-content: center;
        padding: 10px 20px;
    }
`

export const FormContainer = styled.div`
    max-width: 611px;
    background-color: white;
    padding: 39px 71px;
    border-radius: 15px;

    @media (max-width:900px) {
        max-width: none;
        padding: 20px 20px; 
    }
`

export const RadioContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const RadioStyled = styled.input.attrs({type: 'radio'})`
    width: 20px;
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const RadioLabel = styled.label`
    font-size: 1.6rem;
`

export const Form = styled.form`
    margin-top: 47px;
    display: flex;
    flex-direction: column;
    gap: 23px;
`