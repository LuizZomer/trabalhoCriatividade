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
  padding: 2.5rem 0 6.8rem 2.8rem;

  > p {
    margin-top: 1rem;
    width: 25.3rem;
  }
`;
