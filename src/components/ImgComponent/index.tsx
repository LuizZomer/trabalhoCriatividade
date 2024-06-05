import { Img } from "./styles";

interface IImg {
  src: any;
  radius?: string;
  width?: string;
  height?: string;
  alt?: string;
}

export const ImgComponent = ({
  src,
  width,
  height,
  alt = "",
  radius = "0%",
}: IImg) => {
  return (
    <Img src={src} alt={alt} $radius={radius} $width={width} $height={height} />
  );
};
