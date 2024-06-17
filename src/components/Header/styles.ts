import styled from "styled-components";


export const HeaderContainer = styled.header`
    height: 77px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

export const NavContainer = styled.nav`
    font-size: 16px;
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
` 