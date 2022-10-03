import styled from 'styled-components'
import starBG from '../../assets/images/star-bg.svg'

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: #000 url(${starBG});
  height: 100vh;
  #LayerBackground {
    color: red;
  }
  gap: 2em;
`

export const NFTCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  color: white;
  border: 2px solid ${(props) => props.theme.primary};
  :hover {
    cursor: pointer;
    box-shadow: rgb(86 255 24 / 40%) 5px 5px, rgb(86 255 24 / 30%) 10px 10px, rgb(86 255 24 / 20%) 15px 15px,
      rgb(86 255 24 / 10%) 20px 20px, rgb(86 255 24 / 5%) 25px 25px;
  }
`
export const NFTListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
`
