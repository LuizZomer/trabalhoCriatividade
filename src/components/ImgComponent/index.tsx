import { CSSProperties } from "styled-components";
import { Img } from "./styles";

interface IImg {
  src: any;
  radius?: string;
  width?: string;
  height?: string;
  alt?: string;
  cssOnMedia?: CSSProperties;
}

export const ImgComponent = ({
  src,
  width,
  height,
  alt = "",
  radius = "0%",
  cssOnMedia,
}: IImg) => {
  return (
    <Img
      src={src}
      alt={alt}
      $radius={radius}
      $width={width}
      $height={height}
      $cssOnMedia={cssOnMedia}
    />
  );
};
