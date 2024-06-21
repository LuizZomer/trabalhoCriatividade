import styled from "styled-components";

export const GraphContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
  width: 100%;
  padding: 10px;
  gap: 50px;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 900px) {
    order: 2;
    text-align: center;
  }
`;

export const RightSide = styled.div`
  background-color: #fff;
  border-radius: 10px;
  min-width: 800px;

  @media (max-width: 900px) {
    min-width: 80vw;
    order: 1;
  }
`;
