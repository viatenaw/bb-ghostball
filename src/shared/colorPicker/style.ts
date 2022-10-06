import styled from 'styled-components'
import zebraTile from '../../assets/images/zebra-tile.svg'

export const PickerInput = styled.input`
  z-index: 1;
`

export const PickerContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 8px;
`

export const PickerHeader = styled.div`
  display: flex;
  span {
    color: ${(props: any) => props.theme.red};
  }
`

export const PickerInputContainer = styled.div<IColorPickerProps>`
  display: flex;
  width: 250px;
  position: relative;
  input[type='color'] {
    -webkit-appearance: none;
    border: none;
    width: 50%;
    padding: 0;
    height: 50px;
    background: transparent;
  }
  input[type='color']::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  input[type='color']::-webkit-color-swatch {
    border: none;
    background: ${(props: any) => (props.isPlaceHolder ? `url(${zebraTile})` : 'transparent')};
    border-radius: 10px 0 0 10px;
    height: 50px;
  }
`

export const PickerColorPreview = styled.label`
  width: 50%;
  color: #fff;
  background: ${(props: any) => props.theme.fadedWhite};
  height: 50px;
  border-radius: 0 10px 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  font-family: 'Inter', sans-serif;
`
interface IColorPickerProps {
  isPlaceHolder?: boolean
}
