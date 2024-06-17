import { ActionButton } from "../../../../components/Buttons/ActionButton";
import * as Styles from "./styles";

export const Form = () => {
  return (
    <Styles.Container>
      <Styles.FormContainer>
        <h2>Por favor, Ajude Respondendo a Este Formulário</h2>
        <Styles.Form>
          <input type="text" placeholder="Seu nome" />
          <input type="text" placeholder="Gostou da ideia?" />
          <ActionButton label="Enviar resposta" height="66px" width="100%" />
        </Styles.Form>
      </Styles.FormContainer>
    </Styles.Container>
  );
};
