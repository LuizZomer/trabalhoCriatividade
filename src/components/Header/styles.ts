import styled from "styled-components";


export const HeaderContainer = styled.header`
    height: 7.7rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

export const NavContainer = styled.nav`
    font-size: 1.6rem;
    >ul{
        display: flex;
        gap: 4.6rem;
        list-style: none;
    }

    a{
        color: #333333;
    }

    a:hover{
        color: #777;
    }
` 