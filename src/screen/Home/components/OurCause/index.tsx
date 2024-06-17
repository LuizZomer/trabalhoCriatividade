import { Container, ContainerList, ImageContainer } from "./styles";
import dog from "./assets/dogImage.svg";
import { ImgComponent } from "../../../../components/ImgComponent";

export const OurCause = () => {
  return (
    <Container>
      <h2>Nossa causa</h2>
      <p>Projeto: Construção de Casas para Animais Abandonados</p>
      <p>
        Visão do Projeto: Nosso projeto tem como objetivo principal proporcionar
        um lar seguro e acolhedor para animais abandonados, que atualmente vivem
        nas ruas enfrentando adversidades como fome, frio e doenças. Através da
        construção de casinhas, queremos garantir que esses animais tenham um
        lugar digno para se abrigar e se proteger.
      </p>
      <p>Objetivos Específicos:</p>
      <ContainerList>
        <ol>
          <li>
            Construir Casinhas Seguras: Utilizar materiais de qualidade para
            construir casinhas que ofereçam proteção contra as intempéries e
            conforto para os animais.
          </li>
          <li>
            Localização Estratégica: Identificar áreas com alta concentração de
            animais abandonados para instalação das casinhas, garantindo fácil
            acesso a comida e água.
          </li>
          <li>
            Sensibilização da Comunidade: Promover a conscientização sobre a
            importância do cuidado com os animais abandonados, incentivando a
            participação ativa da comunidade.
          </li>
        </ol>
      </ContainerList>
      <ImageContainer>
        <ImgComponent src={dog} width="100%" height="400px" />
      </ImageContainer>
    </Container>
  );
};
