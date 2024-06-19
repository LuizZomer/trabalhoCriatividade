import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface IActionButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  width: string;
  height: string;
  label: string;
}

export const ActionButton = ({ width, height, label, ...rest }: IActionButton) => {
  return (
    <ButtonContainer $width={width} $height={height} {...rest}>
      <span>{label}</span>
    </ButtonContainer>
  );
};
