import { withTheme, ThemeProps } from 'styled-components'
import { BrandingImg, FieldMarkingContainer, InputContainer, MintArea, MintContainer } from './style'
import brandingImg from '../../../../assets/images/GBNFT_Logo Right_Black 1.svg'
import { Heading3, MarkingText } from '../../../../shared/Typography'
import { Button } from '../../../../shared/button'
import { useIsMobileScreen } from '../../../../shared/hooks/useIsMobileScreen'
import { useEffect, useState } from 'react'
import { CustomInput } from '../../../../shared/customInput'

export const Mint: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props

  return (
    <MintContainer>
      <Markings top />
      <MintArea>
        <BrandingImg src={brandingImg} alt="bb-ghosball-branfing" />
        <Heading3>Mint your ghostball nft now</Heading3>
        <InputContainer>
          <Button shadowColor={theme.black} btnType="filledButton">
            MINT NOW
          </Button>
          <CustomInput maxLimit={5} type="number" />
        </InputContainer>
      </MintArea>
      <Markings />
    </MintContainer>
  )
})

interface IMarkingsProps {
  top?: boolean
}
export const Markings = (props: IMarkingsProps) => {
  const [markingArray, setMarkingArray] = useState([10, 20, 30, 40, 50, 40, 30, 20, 10])
  const isMobileScreen = useIsMobileScreen()
  useEffect(() => {
    if (isMobileScreen) {
      setMarkingArray([40, 50, 40])
    } else {
      setMarkingArray([10, 20, 30, 40, 50, 40, 30, 20, 10])
    }
  }, [isMobileScreen])
  return (
    <FieldMarkingContainer {...props}>
      {markingArray.map((el: number, index: number) => {
        return <MarkingText key={index}>{el}</MarkingText>
      })}
    </FieldMarkingContainer>
  )
}
