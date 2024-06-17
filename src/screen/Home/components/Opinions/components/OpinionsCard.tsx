import styled from "styled-components";

export const OpinionsCard = ({
  name,
  text,
}: {
  name: string;
  text: string;
}) => {
  return (
    <Container>
      <h4>{name}</h4>
      <p>{text}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #f4f6fa;
  padding: 24px 24px 0 24px;
  height: 287px;

  > p {
    margin-top: 10px;
  }
`;
