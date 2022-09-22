import styled from "styled-components";

interface ITextProps {
    fSize?: string,
    fColor?: string,
    fWeight?: string,
    fOpacity?: string,
    tAlign?: string,
    fLineHeight?: string,
    fcolor?: string,
    fLetterSpace?: string,
    maxWidth?: string,
    fSizeM?: string,
    fLineHeightMb?: string,
    width?: string
}

export const Heading3 = styled.p`
    color: ${(props: any) => props.theme.black};
    font-size: 26px;
    font-style: italic;
    line-height: 31px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
`
export const MarkingText = styled.p`
    color: ${(props: any) => props.theme.black};
    font-size: 24px;
    font-style: italic;
    line-height: 29px;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
`