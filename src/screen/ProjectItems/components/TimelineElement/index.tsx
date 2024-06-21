import { Img } from "../../../../components/ImgComponent/styles";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
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
        <h1 className="title">{title}</h1>
        <h4 className="caption">{summary}</h4>
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
