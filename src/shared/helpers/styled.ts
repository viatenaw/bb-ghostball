import styled from 'styled-components'
import { screenSizes } from '../../styles/theme'

interface IFlexProps {
  gap?: string
  maxwidth?: string
  width?: string
  widthM?: string
  height?: string
  heightM?: string
  align?: string
}
export const FlexRow = styled.div<IFlexProps>`
  display: flex;
  gap: ${(props: any) => props.gap};
`

export const FlexCol = styled.div<IFlexProps>`
  display: flex;
  gap: ${(props: any) => props.gap};
  flex-direction: column;
  max-width: ${(props: any) => props.maxwidth};
  align-items: ${(props: any) => props.align}; ;
`

export const SVGIcon = styled.img<IFlexProps>`
  width: ${(props: any) => props.width || '65px'};
  height: ${(props: any) => props.height || '65px'};
  @media (max-width: ${screenSizes.M}px) {
    width: ${(props: any) => props.widthM};
    height: ${(props: any) => props.heightM};
  }
`
