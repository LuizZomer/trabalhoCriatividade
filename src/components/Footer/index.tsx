import * as Styles from "./styles";

export const Footer = () => {
  return (
    <Styles.FooterContainer>
      <div>
        <Styles.FooterTitle>Nossa equipe</Styles.FooterTitle>
      </div>
      <ul>
        <li>Daniel Freitas</li>
        <li>Luiz Felipe</li>
        <li>Luiz Linhares</li>
        <li>Willian Minatto</li>
      </ul>
      <Styles.Line />
      <Styles.Copyright>Copyright © SATC</Styles.Copyright>
    </Styles.FooterContainer>
  );
};
