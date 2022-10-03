import styled from 'styled-components'
import starBG from '../../assets/images/star-bg.svg'
import { screenSizes } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #000 url(${starBG});
  gap: 2em;
  @media (min-width: ${screenSizes.M}px) {
    height: 100vh;
  }
`

export const Main = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: start;
  gap: 1em;
  max-width: 1400px;
  @media (max-width: ${screenSizes.M}px) {
    padding: 1em 0 2em 0;
  }
`

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`
export const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 20px;
  @media (max-width: ${screenSizes.M}px) {
    flex-flow: column;
    align-items: center;
  }
`

export const AvatarArea = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: ${(props: any) => props.theme.fadedWhite};
  padding: 0 24px;
`

export const AtrributesArea = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  @media (max-width: ${screenSizes.M}px) {
    width: 100%;
    align-items: center;
  }
`
export const AtrributesHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media (max-width: ${screenSizes.M}px) {
    width: 100%;
    justify-content: start;
  }
`
export const AtrributesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  grid-gap: 1rem;
  width: 55vw;
  max-width: 850px;
  justify-items: center;
  @media (max-width: ${screenSizes.M}px) {
    width: 95vw;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`

export const AttributeBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: ${(props: any) => props.theme.fadedWhite};
  max-width: 195px;
  width: 195px;
  border-radius: 10px;
  padding: 25px;
  gap: 8px;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.primary};
    cursor: pointer;
  }
  @media (max-width: ${screenSizes.M}px) {
    max-width: 170px;
    width: 170px;
  }
`
export const GreenTile = styled.div`
  background: ${(props: any) => props.theme.primary};
  border-radius: 10px;
  padding: 6px 12px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 25px;
`

export const NFTAvatar = styled.img`
  width: 340px;
  height: 405px;
  border-radius: 5px;
  @media (max-width: ${screenSizes.M}px) {
    width: 88vw;
    height: 550px;
  }

  @media (max-width: ${screenSizes.XS}px) {
    width: 80vw;
    height: 400px;
  }
`
