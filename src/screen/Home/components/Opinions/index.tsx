import { OpinionsCard } from "../../../../components/OpnionCard/OpinionsCard";
import { opnionsHome } from "../../../../data/data";
import * as Styles from "./styles";

export const Opinions = () => {
  return (
    <Styles.Container>
      <h2>Algumas opniões sobre o projeto</h2>
      <p className="p1">Oque algumas pessoas acharam da ideia</p>
      <Styles.GridOpnionsContainer>
        {opnionsHome.map(({ name, comment }, index) => (
          <OpinionsCard key={index} name={name} text={comment} />
        ))}
      </Styles.GridOpnionsContainer>
    </Styles.Container>
  );
};
