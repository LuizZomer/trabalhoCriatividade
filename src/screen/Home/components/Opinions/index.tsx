import { OpinionsCard } from "./components/OpinionsCard";
import * as Styles from "./styles";

export const Opinions = () => {
  const coments = [
    {
      name: "Maria Silva",
      text: "Estou encantada com o projeto casinha de pets! É maravilhoso ver uma iniciativa que realmente se preocupa com o bem-estar dos animais abandonados. A construção de casinhas vai fazer toda a diferença na vida desses bichinhos.",
    },
    {
      name: "Ana Souza",
      text: "O projeto casinha de pets é uma ideia fantástica. Identificar pontos estratégicos para instalar as casinhas mostra um cuidado especial com os animais. É um alívio saber que eles terão um lugar seguro para se proteger.",
    },

    {
      name: "Carlos Mendes",
      text: "Apoio integralmente o casinha de pets. Saber que os animais terão acesso a abrigo, comida e água é reconfortante. A comunidade precisa se unir para garantir o sucesso desse projeto tão necessário.",
    },

    {
      name: "Beatriz Lima",
      text: "Casinha de pets é a solução que sempre esperei para os animais abandonados. A abordagem estratégica de instalar casinhas onde mais precisam é simplesmente brilhante. Mal posso esperar para ajudar de alguma forma.",
    },
  ];
  return (
    <Styles.Container>
      <h2>Algumas opniões sobre o projeto</h2>
      <p className="p1">Oque algumas pessoas acharam da ideia</p>
      <Styles.GridOpnionsContainer>
        {coments.map(({ name, text }, index) => (
          <OpinionsCard key={index} name={name} text={text} />
        ))}
      </Styles.GridOpnionsContainer>
    </Styles.Container>
  );
};
