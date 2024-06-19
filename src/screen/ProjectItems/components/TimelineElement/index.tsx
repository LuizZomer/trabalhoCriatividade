import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Img } from "../../../../components/ImgComponent/styles";
import { TimelineElementContainer } from "./styles";

interface IProjectItems {
  title: string;
  linkTo?: any;
  image?: any;
  summary: string;
  linkText?: string;
}

export const TimelineElement = ({
  summary,
  title,
  image,
  linkTo,
  linkText,
}: IProjectItems) => {
  return (
    <VerticalTimelineElement iconStyle={{ background: "gray" }}>
      <TimelineElementContainer>
        <h2>{title}</h2>
        <p>{summary}</p>
        {image && <Img src={image} $width="90%" />}
        {linkTo && (
          <a href={linkTo} target="_blank">
            {linkText || "clique aqui para acessar!"}
          </a>
        )}
      </TimelineElementContainer>
    </VerticalTimelineElement>
  );
};
