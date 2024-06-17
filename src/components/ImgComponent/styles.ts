import styled, { CSSProperties } from "styled-components";

interface IImg{
    $width?:string,
    $height?: string;
    $radius?: string;
    $cssOnMedia?: CSSProperties;
}

export const Img = styled.img<IImg>`

    ${({ $width }) => $width && `min-width:${$width} ; width: ${$width};`}

    ${({ $height }) => $height && `min-height: ${$height}; height: ${$height};`}

    ${({ $radius }) => $radius && `border-radius:${$radius};`}

    display: grid;
    place-items: center;

    @media (max-width: 900px) {
        ${({ $cssOnMedia }) => 
            $cssOnMedia && Object.entries($cssOnMedia).map(([key, value]) => `${key}: ${value};`).join(' ')
        }
    }
`