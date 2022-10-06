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
import { ComposableNFT } from '../../../../blockchain/instance'

const nftCount = 1
export const Mint: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props

  const dispatch = useDispatch()
  const { active, account } = useWeb3React<any>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const handleConnectWallet = () => {
    dispatch(setConnectWallet(true))
    document.body.style.overflow = 'hidden'
  }

  const mintNFTs = async () => {
    try {
      setIsLoading(true)
      const mintPrice = await ComposableNFT.methods.mintPrice().call()
      console.log('mintPrice, ', mintPrice, typeof mintPrice)
      await ComposableNFT.methods
        .mint()
        .send({ from: account, value: mintPrice })
        .on('transactionHash', (hash: any) => {
          console.log('txn hash', hash)
        })
        .on('receipt', (receipt: any) => {
          setIsLoading(false)
          console.log('txn completed', receipt)
        })
        .on('error', (e: any) => {
          setIsLoading(false)
          console.error('error in minting', e)
        })
    } catch (error) {
      setIsLoading(false)
      console.error('error in minting', error)
    }
  }

  return (
    <MintContainer id="#mint">
      <Markings top />
      <MintArea>
        <BrandingImg src={brandingImg} alt="bb-ghosball-branfing" />
        <Heading3>{active && account ? MINT_NOW_TEXT : CONNECT_WALLET_TEXT}</Heading3>
        {active && account ? (
          <InputContainer>
            <Button isDisabled={isLoading} onClick={mintNFTs} shadowColor={theme.black} btnType="filledButton">
              MINT NOW
            </Button>
            <CustomInput maxLimit={1} type="number" value={nftCount} disable />
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
