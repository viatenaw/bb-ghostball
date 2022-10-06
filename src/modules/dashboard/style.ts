import styled from 'styled-components'
import starBG from '../../assets/images/star-bg.svg'
import { LTRAnimationOnHover } from '../../shared/helpers/styled'
import { screenSizes } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: start;
  align-items: center;
  background: #000 url(${starBG});
  #LayerBackground {
    color: red;
  }
  gap: 2em;
  @media (min-width: ${screenSizes.M}px) {
    height: 100vh;
  }
`

export const NFTCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props: any) => props.theme.fadedWhite};
  padding: 12px;
  color: white;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.white};
  }
  gap: 14px;
  ${LTRAnimationOnHover};
`

export const NFTListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 1rem;
  max-width: 1200px;
  justify-items: center;
  @media (max-width: ${screenSizes.XL}px) {
    max-width: 90vw;
  }
  padding-bottom: 5em;
`
interface IImageProps {
  maxwidth?: string
  width?: string
  widthM?: string
  height?: string
  heightM?: string
  maxwidthM?: string
  borderRadius?: string
}

export const SVGImage = styled.img<IImageProps>`
  width: ${(props: any) => props.width || '65px'};
  height: ${(props: any) => props.height || '65px'};
  border-radius: ${(props: any) => props.borderRadius || '5px'};
  max-width: 270px;
  @media (max-width: ${screenSizes.M}px) {
    width: ${(props: any) => props.widthM};
    height: ${(props: any) => props.heightM};
  }
  z-index: 2;
`
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 1200px;
  padding-top: 5em;
  align-items: center;
  gap: 50px;
`

export const TextWrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  @media (max-width: ${screenSizes.XL}px) {
    max-width: 90vw;
  }
  span {
    background: ${(props: any) => props.theme.primary};
    color: ${(props: any) => props.theme.black};
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    padding: 10px 14px;
    border-radius: 15px;
  }
`
