import { VerticalTimeline } from "react-vertical-timeline-component";
import { TimelineElement } from "./components/TimelineElement";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "./styles";
import { images } from "./assets";

export const ProjectItems = () => {
  const items = [
    {
      title: "Persona Canva",
      summary:
        "Um Persona Canvas é uma ferramenta visual utilizada para criar perfis detalhados de usuários ou clientes-alvo, baseada em suas características, necessidades, comportamentos e motivações. Ele ajuda a entender profundamente o público-alvo, guiando o desenvolvimento de produtos, serviços e estratégias de marketing. A estrutura típica inclui seções como dados demográficos, objetivos, frustrações, expectativas, e canais preferidos. O objetivo é humanizar o usuário, facilitando a criação de soluções mais eficazes e personalizadas.",
      image: images.personaImage,
    },
    {
      title: "Scamper",
      summary:
        "SCAMPER é uma técnica de brainstorming usada para inovar e melhorar produtos, serviços ou processos. A sigla representa sete ações: Substitute (substituir componentes), Combine (combinar elementos), Adapt (adaptar para outros usos), Modify (modificar características), Put to another use (usar de outra maneira), Eliminate (eliminar partes desnecessárias) e Reverse/Rearrange (inverter ou reorganizar). Cada ação estimula a criatividade e a geração de novas ideias.",
      image: images.scamper,
      linkTo: "https://example.com/projeto2",
      linkText: "Saiba mais",
    },
    {
      title: "Mapa de empatia",
      summary: "Este é um resumo do projeto 3",
      image: images.mapaEmpatia,
      linkText: "Saiba mais",
    },
    {
      title: "5w2h",
      summary:
        "5W2H é uma ferramenta de planejamento e gestão que ajuda a detalhar e organizar ações e projetos. A sigla representa sete perguntas essenciais: What (O que será feito?), Why (Por que será feito?), Where (Onde será feito?), When (Quando será feito?), Who (Quem fará?), How (Como será feito?) e How much (Quanto custará?). Ao responder essas perguntas, a metodologia facilita a definição clara de objetivos, responsabilidades, prazos, métodos e custos, melhorando a eficiência e a execução de projetos.",
      image: images.wh,
    },
  ];

  const figmaTimeline = {
    title: "Figma",
    summary:
      "Figma é uma ferramenta de design colaborativa baseada em nuvem, ideal para criar interfaces de usuário e experiências digitais. Suporta trabalho em equipe em tempo real, permitindo que vários designers editem simultaneamente. Oferece recursos como prototipagem, vetorização, e componentes reutilizáveis. Facilita a comunicação e o feedback com comentários e compartilhamento fácil de projetos. Compatível com vários dispositivos, Figma é amplamente usado para design de produtos digitais, devido à sua versatilidade e eficiência colaborativa.",
    linkText: "Veja o nosso figma",
    linkTo:
      "https://www.figma.com/design/azN38ZAKUwda6nXcgJfOsG/Truck-Service-Landing-Page-Design-(Community)?node-id=0-1&t=uQ8n1anDYc45saWY-1",
  };

  return (
    <Container>
      <VerticalTimeline lineColor="gray" layout="1-column-left">
        <TimelineElement
          summary={figmaTimeline.summary}
          title={figmaTimeline.title}
          linkText={figmaTimeline.linkText}
          linkTo={figmaTimeline.linkTo}
        />
        {items.map(({ title, summary, image, linkTo }, index) => (
          <TimelineElement
            key={index}
            summary={summary}
            title={title}
            image={image}
            linkTo={linkTo}
          />
        ))}
      </VerticalTimeline>
    </Container>
  );
};
