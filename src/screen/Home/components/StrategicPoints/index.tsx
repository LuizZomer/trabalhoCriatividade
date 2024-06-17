import { ImgComponent } from "../../../../components/ImgComponent";
import * as Styles from "./styles";
import map from "../../assets/map.svg";

export const StrategicPoints = () => {
  return (
    <Styles.Container>
      <Styles.ContentDiv>
        <h1>Pontos estrategicos</h1>
        <p className="p1">
          O projeto de construção de casinhas para animais abandonados visa
          oferecer abrigo seguro para animais de rua. As casinhas serão
          instaladas em pontos estratégicos, onde há alta concentração de
          animais abandonados, garantindo fácil acesso a comida e água. A
          participação da comunidade, por meio de doações e voluntariado, é
          crucial para o sucesso do projeto, que busca melhorar a vida desses
          animais.
        </p>
      </Styles.ContentDiv>
      <ImgComponent src={map} alt="Imagem de um mapa" width="40%" />
    </Styles.Container>
  );
};
