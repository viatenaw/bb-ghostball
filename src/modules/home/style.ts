import styled, { ThemeProps } from 'styled-components'
import { screenSizes } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
`

export const MintContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: ${(props: ThemeProps<any>) => props.theme.primary};
`

export const MintArea = styled.div`
  display: flex;
  gap: 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px);
`

export const BrandingImg = styled.img`
  height: 50px;
  width: 700px;
  @media (max-width: ${screenSizes.M}px) {
    height: 22px;
    width: 310px;
  }
`
export const InputContainer = styled.div`
  display: flex;
  gap: 1em;
`
interface IMarkingsProps {
  top?: boolean,
}
export const FieldMarkingContainer = styled.div<IMarkingsProps>`
  display: flex;
  justify-content: space-around;
  margin: ${(props: IMarkingsProps) => props.top ? '16px 0 0 0' : '0 0 16px 0'};
  // height: 29px;
  max-height: 29px;
`