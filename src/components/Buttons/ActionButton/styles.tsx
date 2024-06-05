import styled from "styled-components";

interface IButton {
  $width: string;
  $height: string;
}

export const ButtonContainer = styled.button<IButton>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  background-color: #4762ff;
  border-radius: 0.5rem;
  border: none;

  > span {
    font-size: 1.8rem;
    font-weight: 600;
    color: #fff;
    line-height: 19px;
  }

  &:active {
    transform: scale(0.9);
  }
`;
