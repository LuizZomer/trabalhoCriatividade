import styled from "styled-components";

interface IImg{
    $width?:string,
    $height?: string;
    $radius?: string;
}

export const Img = styled.img<IImg>`

    ${({ $width }) => $width && `min-width:${$width} ; width: ${$width};`}

    ${({ $height }) => $height && `min-height: ${$height}; height: ${$height};`}

    ${({ $radius }) => $radius && `border-radius:${$radius};`}


    display: grid;
    place-items: center;

`