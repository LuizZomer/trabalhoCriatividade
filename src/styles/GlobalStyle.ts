import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: 'Inter', sans-serif;
        background-color: #f9f9f9;
    }

    h1{
        font-size: 5rem;
        color:#333333;
        font-weight: 700;
        line-height: 60px;
    }

    h2{
        font-size: 4.0rem;
        color: #333333;
        line-height: 48px;
        font-weight: 700;
    }

    h4{
        font-size: 2.8rem;
        color: #333333;
        line-height: 29px;
        font-weight: 700;
    }

    p{
        color: #333333;
        font-size: 1.6rem;
        line-height: 24px;
        font-weight: 400;
    }

    .p1{
        font-size: 2rem;
        line-height: 30px;
        font-weight: 400;
    }

    .p2{
        font-size: 1.6rem;
        line-height: 24px;
        font-weight: 400;
    }

    a{
        text-decoration: none;
    }

    li{
        font-size: 1.6rem;
        color: #333333;
    }

    input{
        height: 56px;
        width: 100%;
        border: 1px solid #4762FF;
        border-radius: 8px;
        padding-left: 22px;

        
        &::placeholder{
            color: #979797;
        }
    }

`