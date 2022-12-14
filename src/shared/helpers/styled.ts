import styled, { ThemeProps, css } from 'styled-components'
import { screenSizes } from '../../styles/theme'

interface IFlexProps {
  gap?: string
  maxwidth?: string
  width?: string
  widthM?: string
  height?: string
  heightM?: string
  align?: string
  padding?: string
  maxwidthM?: string
  margin?: string
  borderRadius?: string
}
export const FlexRow = styled.div<IFlexProps>`
  display: flex;
  gap: ${(props: any) => props.gap};
`

export const FlexCol = styled.div<IFlexProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props: any) => props.gap};
  max-width: ${(props: any) => props.maxwidth};
  align-items: ${(props: any) => props.align};
  padding: ${(props: any) => props.padding};
  @media (max-width: ${screenSizes.M}px) {
    max-width: ${(props: any) => props.maxwidthM};
  }
`

export const SVGIcon = styled.img<IFlexProps>`
  width: ${(props: any) => props.width || '65px'};
  height: ${(props: any) => props.height || '65px'};
  @media (max-width: ${screenSizes.M}px) {
    width: ${(props: any) => props.widthM};
    height: ${(props: any) => props.heightM};
  }
  border-radius: ${(props: any) => props.borderRadius};
`
export const RoundSVGIcon = styled.img<IFlexProps>`
  width: ${(props: any) => props.width || '65px'};
  height: ${(props: any) => props.height || '65px'};
  border-radius: 48px;
  @media (max-width: ${screenSizes.M}px) {
    width: ${(props: any) => props.widthM};
    height: ${(props: any) => props.heightM};
  }
  margin: ${(props: any) => props.margin};
`
export const CircleCntr = styled.div`
  height: 80px;
  z-index: 1;
  background: ${(props: ThemeProps<any>) => props.theme.primary};
  padding: 15px 0;
`
interface ICircleBarProps {
  isActive?: boolean
}
export const Circle = styled.div<ICircleBarProps>`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 3px solid ${(props: any) => (props.isActive ? props.theme.black : props.theme.blackFaded)};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LTRAnimationOnHover = css`
  position: relative;
  ::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  :hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  ::before {
    content: ' ';
    border-radius: 10px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: ${(props: any) => props.theme.primary};
    z-index: 1;
    transition: transform 0.3s ease;
    opacity: 0.35;
  }
`
