import { SmallText } from '../Typography'
import { PickerColorPreview, PickerContainer, PickerHeader, PickerInput, PickerInputContainer } from './style'

interface IColorPickerProps {
  value: any
  onChange: any
  headerText?: string
  required?: boolean
  pickerId: string
}

export const ColorPicker = (props: IColorPickerProps) => {
  const { value, onChange, headerText, required, pickerId } = props
  console.log('value', value, !value)

  return (
    <PickerContainer>
      <PickerHeader>
        {required && <span>*</span>}
        <SmallText fWeight="700" fSize="18px" fColor="#fff">
          {headerText}
        </SmallText>
      </PickerHeader>
      <PickerInputContainer isPlaceHolder={!value}>
        <PickerInput id={`color-picker-${pickerId}`} value={value} onChange={onChange} type="color" />
        <PickerColorPreview htmlFor={`color-picker-${pickerId}`}>{value || 'None'}</PickerColorPreview>
      </PickerInputContainer>
    </PickerContainer>
  )
}
