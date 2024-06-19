import styled from "styled-components";


export const HeaderContainer = styled.header`
    height: 77px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;

    @media (max-width:900px) {
        text-align: center;
    }

`

export const NavContainer = styled.nav`
    font-size: 1.6rem;
    >ul{
        display: flex;
        gap: 46px;
        list-style: none;
    }

    a{
        color: #333333;
    }

    a:hover{
        color: #777;
    }

    @media (max-width:900px) {
        margin: 30px;

        ul{
            display: flex;
            align-items: center;
        }
       a{
        font-size: 1.3rem;
       } 
    }
` 