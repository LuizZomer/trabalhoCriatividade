import dogHouses from "../../assets/dogHouses.svg";
import { ActionButton } from "../../../../components/Buttons/ActionButton";
import { ImgComponent } from "../../../../components/ImgComponent";
import * as Styles from "./styles";

export const Apresentation = () => {
  return (
    <Styles.Container>
      <Styles.Content>
        <h1>Precisamos da Sua Ajuda: Juntos Podemos Transformar Vidas</h1>
        <p className="p1">
          O projeto de construção de casinhas para animais abandonados visa
          oferecer abrigo seguro para animais de rua. Envolve o mapeamento de
          áreas, arrecadação de recursos e construção das casinhas. A manutenção
          e o monitoramento dos abrigos garantem o bem-estar dos animais. A
          participação da comunidade, por meio de doações e voluntariado, é
          crucial para o sucesso do projeto, que busca melhorar a vida desses
          animais.
        </p>
        <ActionButton
          height="5.2rem"
          label="Continuar lendo..."
          width="19.6rem"
        />
      </Styles.Content>
      <ImgComponent
        src={dogHouses}
        alt="casas de cachorros"
        height="70rem"
        width="117rem"
      />
    </Styles.Container>
  );
};
