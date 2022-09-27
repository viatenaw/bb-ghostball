import { withTheme, ThemeProps } from 'styled-components'
import { useWeb3React } from '@web3-react/core'

import { BrandingImg, FieldMarkingContainer, InputContainer, MintArea, MintContainer } from './style'
import brandingImg from '../../../../assets/images/GBNFT_Logo Right_Black 1.svg'
import { Heading3, MarkingText } from '../../../../shared/Typography'
import { Button } from '../../../../shared/button'
import { useIsMobileScreen } from '../../../../shared/hooks/useIsMobileScreen'
import { useEffect, useState } from 'react'
import { CustomInput } from '../../../../shared/customInput'
import { CONNECT_WALLET_TEXT, MINT_NOW_TEXT } from '../../../../shared/helpers/text'
import { useDispatch } from 'react-redux'
import { setConnectWallet } from '../../../../logic/redux/actions'

export const Mint: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props

  const dispatch = useDispatch()
  const { active, account } = useWeb3React<any>()

  const handleConnectWallet = () => {
    dispatch(setConnectWallet(true))
    document.body.style.overflow = 'hidden'
  }

  return (
    <MintContainer id="#mint">
      <Markings top />
      <MintArea>
        <BrandingImg src={brandingImg} alt="bb-ghosball-branfing" />
        <Heading3>{active && account ? MINT_NOW_TEXT : CONNECT_WALLET_TEXT}</Heading3>
        {active && account ? (
          <InputContainer>
            <Button shadowColor={theme.black} btnType="filledButton">
              MINT NOW
            </Button>
            <CustomInput maxLimit={5} type="number" />
          </InputContainer>
        ) : (
          <Button onClick={handleConnectWallet} shadowColor={theme.black} btnType="filledButton">
            Connect Wallet
          </Button>
        )}
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
