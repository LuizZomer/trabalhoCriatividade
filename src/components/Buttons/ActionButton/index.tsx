import { ButtonContainer } from "./styles";

interface IActionButton {
  width: string;
  height: string;
  label: string;
}

export const ActionButton = ({ width, height, label }: IActionButton) => {
  return (
    <ButtonContainer $width={width} $height={height}>
      <span>{label}</span>
    </ButtonContainer>
  );
};
