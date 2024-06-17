import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;

  > ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  li {
    color: #fff;
  }
`;

export const FooterTitle = styled.h5`
  font-size: 20px;
  color: #fff;
`;

export const Line = styled.div`
  border-top: 1px solid #474747;
  width: 100%;
`;

export const Copyright = styled.p`
  color: #d9dbe1;
`;
