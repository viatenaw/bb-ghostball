import styled, { ThemeProps } from 'styled-components'
import { screenSizes } from '../../styles/theme'
import starBG from '../../assets/images/star-bg.svg'

export const ContainerAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0 200px 0;
  background: #000 url(${starBG});
`
export const ContainerRoadMap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0 200px 0;
  background: #000 url(${starBG});
  flex-direction: column;
`

export const ContainerGuide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0 200px 0;
  flex-direction: column;
  background: ${(props: ThemeProps<any>) => props.theme.primary};
`
export const ContainerTeam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0 200px 0;
  flex-direction: column;
  background: ${(props: ThemeProps<any>) => props.theme.primary};
  gap: 80px;
`
export const TeamCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  max-width: 1400px;
`

export const FlexContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;
  @media (max-width: ${screenSizes.M}px) {
    flex-direction: column;
  }
`

export const RoadMapHead = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 550px;
`

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  max-width: 560px;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: start;
  max-width: 550px;
  @media (max-width: ${screenSizes.M}px) {
    p {
      text-align: center;
    }
    align-items: center;
    max-width: 350px;
  }
`

export const Avatar1 = styled.img`
  width: 590px;
  height: 520px;
  @media (max-width: ${screenSizes.M}px) {
    width: 355px;
    height: 310px;
  }
`

export const Avatar2 = styled.img`
  width: 345px;
  height: 475px;
  @media (max-width: ${screenSizes.M}px) {
    width: 240px;
    height: 325px;
  }
`

export const FloatingTile = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 122px;
  height: 42px;
  border-radius: 50px;
  background: ${(props: ThemeProps<any>) => props.theme.fadedWhite};
  bottom: 20px;
  right: 15px;
  color: ${(props: ThemeProps<any>) => props.theme.white};
`

export const Card = styled.div`
  width: 280px;
  height: 320px;
  background: ${(props: ThemeProps<any>) => props.theme.fadedWhite};
  border-radius: 10px;
`
interface ICardProps {
  marginTop?: string
}
export const CardsContainer = styled.div`
  margin-top: ${(props: ICardProps) => props.marginTop || '2em'};
  display: flex;
  gap: 140px;
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`

export const CornerBox = styled.div`
  height: 610px;
  width: 215px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(66.5px);
  background: transparent;
  border: 1px solid white;
  border-left: none;
  border-radius: 0 24px 24px 0;
`
export const LineRight = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props: ThemeProps<any>) => props.theme.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(66.5px);
`
export const LineLeft = styled.div`
  height: 1px;
  width: 100%;
  background: #ffffff;
  position: absolute;
  top: 50%;
  right: 50%;
  -webkit-transform: translateX(-66.5px);
  -ms-transform: translateX(-66.5px);
  transform: translateX(-66.5px);
`

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`

export const CardTextWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 16px;
`

export const BlankItem = styled.div`
  height: 185px;
  width: 185px;
`
