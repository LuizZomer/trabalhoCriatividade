import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const WrapperContainer = styled.div`
  overflow: auto;
`;

export const graphContainer = styled.div`
  width: 100%;
  padding: 50px;
  min-width: 1000px;
`;

export const OpnionsContainer = styled.div`
  padding: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridOpnionsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 400px));
  justify-content: center;
  gap: 50px;
  margin: 70px 0;
`;
