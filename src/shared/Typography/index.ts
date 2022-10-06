import styled from 'styled-components'
import { screenSizes } from '../../styles/theme'

interface ITextProps {
  fSize?: string
  fColor?: string
  fWeight?: string
  fOpacity?: string
  tAlign?: string
  fLineHeight?: string
  fcolor?: string
  fLetterSpace?: string
  maxWidth?: string
  fSizeM?: string
  fLineHeightMb?: string
  width?: string
  fontSizeM?: string
  wSpace?: string
}

export const Heading3 = styled.p`
  color: ${(props: any) => props.theme.black};
  font-size: 26px;
  font-style: italic;
  line-height: 31px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
`
export const MarkingText = styled.p<ITextProps>`
  color: ${(props: any) => props.fColor || props.theme.black};
  font-size: ${(props: any) => props.fSize || '24px'};
  font-style: italic;
  line-height: 29px;
  font-weight: ${(props: any) => props.fWeight || '600'};
  font-family: 'Inter', sans-serif;
`
export const WalletText = styled.p<ITextProps>`
  color: ${(props: any) => props.fColor || props.theme.white};
  font-size: ${(props: any) => props.fSize || '20px'};
  font-style: italic;
  line-height: 24px;
  font-weight: ${(props: any) => props.fWeight || '600'};
  font-family: 'Inter', sans-serif;
  @media (max-width: ${screenSizes.M}px) {
    font-size: ${(props: any) => props.fontSizeM || '16px'};
  }
`
export const UnderLineText = styled.p<ITextProps>`
  color: ${(props: any) => props.fColor || props.theme.white};
  font-size: ${(props: any) => props.fSize || '14px'};
  font-style: italic;
  line-height: 24px;
  font-weight: ${(props: any) => props.fWeight || '500'};
  font-family: 'Inter', sans-serif;
  text-decoration: underline;
  @media (max-width: ${screenSizes.M}px) {
    font-size: ${(props: any) => props.fontSizeM || '16px'};
  }
`
export const BolderText = styled.p<ITextProps>`
  color: ${(props: any) => props.fColor};
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: ${(props: any) => props.fSize || '36px'};
  line-height: 44px;
  @media (max-width: ${screenSizes.M}px) {
    font-size: ${(props: any) => props.fontSizeM};
  }
`

export const BigBolderText = styled.p<ITextProps>`
  color: ${(props: any) => props.fColor};
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: ${(props: any) => props.fSize || '48px'};
  line-height: 58px;
  text-align: ${(props: any) => props.tAlign};
`
export const CardHeadText = styled.p<ITextProps>`
  color: ${(props: any) => props.fColor || props.theme.white};
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 900;
  font-size: ${(props: any) => props.fSize || '36px'};
  line-height: 44px;
  text-align: ${(props: any) => props.tAlign};
  @media (max-width: ${screenSizes.M}px) {
    font-size: ${(props: any) => props.fontSizeM};
  }
`
export const CardBodyText = styled.p<ITextProps>`
  color: ${(props: any) => props.fColor || props.theme.white};
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: ${(props: any) => props.fSize || '16px'};
  line-height: 24px;
  text-align: ${(props: any) => props.tAlign};
  @media (max-width: ${screenSizes.M}px) {
    font-size: ${(props: any) => props.fontSizeM};
  }
  white-space: ${(props: any) => props.wSpace};
`
export const SmallText = styled.p<ITextProps>`
  color: ${(props: any) => props.fColor};
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-weight: ${(props: any) => props.fWeight || '500'};
  font-size: ${(props: any) => props.fSize || '16px'};
  line-height: 24px;
  @media (max-width: ${screenSizes.M}px) {
    font-size: ${(props: any) => props.fontSizeM || '14px'};
  }
`
