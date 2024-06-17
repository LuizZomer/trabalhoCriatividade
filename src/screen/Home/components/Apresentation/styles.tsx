import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 50px;
    padding: 0 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 550px;

  > p {
    margin-bottom: 20px;
  }

  @media (max-width: 900px) {
    text-align: center;
    align-items: center;
    justify-content: center;
    max-width: none;
  }
`;
