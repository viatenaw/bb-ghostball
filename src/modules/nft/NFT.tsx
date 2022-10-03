import { useParams } from 'react-router-dom'
import { ThemeProps, withTheme } from 'styled-components'
import {
  Bottom,
  Container,
  Main,
  AtrributesArea,
  AvatarArea,
  Top,
  AtrributesList,
  AttributeBox,
  AtrributesHead,
  GreenTile,
  ButtonsContainer,
  NFTAvatar,
} from './style'

import { Button } from '../../shared/button'
import { SVGIcon } from './../../shared/helpers/styled'
import { useEffect, useState } from 'react'
import { ComposableNFT } from '../../blockchain/instance'
import { useWeb3React } from '@web3-react/core'
import { WalletText, CardBodyText, BolderText } from '../../shared/Typography'

import leftArrow from '../../assets/images/left-arrow.svg'
import openInNew from '../../assets/images/open-in-new-icon.svg'
import { useIsMobileScreen } from '../../shared/hooks/useIsMobileScreen'

const Buffer = require('buffer/').Buffer

export const NFT: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props
  const isMobile = useIsMobileScreen()
  const { id } = useParams<any>()
  const [nftSvg, setNftSvg] = useState<any>()
  const [nftAttributes, setNftAttributes] = useState<any>([])
  const { account, active, library } = useWeb3React()
  useEffect(() => {
    if (library) init()
  }, [library])
  const init = async () => {
    try {
      const tokenB64 = await ComposableNFT.methods.tokenURI(id).call()

      const tokenStr = tokenB64.split(',')[1]
      const tokenBuffer = Buffer.from(tokenStr, 'base64')
      const tokenJSON = tokenBuffer.toString()
      const tokenDetails = JSON.parse(tokenJSON)

      const tokenImgB64 = tokenDetails.image
      const tokenImgStr = tokenImgB64.split(',')[1]
      const tokenImgBuffer = Buffer.from(tokenImgStr, 'base64')
      const tokenImgJSON = tokenImgBuffer.toString()
      console.log('tokenImgJSON', tokenImgJSON)

      let blob = new Blob([tokenImgJSON], { type: 'image/svg+xml' })
      let tokenUrl = URL.createObjectURL(blob)

      const attributes = tokenDetails.attributes
      setNftAttributes(attributes)
      console.log('attributes', attributes)

      setNftSvg(tokenUrl)
    } catch (error) {
      console.error('error---', error)
    }
  }
  return (
    <Container>
      <Main>
        <Top>
          <Button btnType="borderButton">
            <SVGIcon width="18px" height="15px" src={leftArrow} />
            {!isMobile && 'Back'}
          </Button>
        </Top>
        <Bottom>
          <AvatarArea>
            {<NFTAvatar src={nftSvg} />}
            <ButtonsContainer>
              <Button btnType="tileButton">Preview</Button>
              <Button btnType="tileButton">
                <SVGIcon width="16px" height="16px" src={openInNew} />
                Opensea
              </Button>
            </ButtonsContainer>
          </AvatarArea>
          <AtrributesArea>
            <AtrributesHead>
              <BolderText fontSizeM="26px" fColor={theme.white}>
                Ghostball#{id}
              </BolderText>
              <GreenTile>{nftAttributes.length} Attributes</GreenTile>
            </AtrributesHead>
            <AtrributesList>
              {nftAttributes &&
                nftAttributes.map((el: any, idx: any) => {
                  return (
                    <AttributeBox key={idx}>
                      <WalletText fontSizeM="18px" wSpace="nowrap" fWeight="700" fColor={theme.primary}>
                        {el.trait_type}
                      </WalletText>
                      <CardBodyText wSpace="nowrap">{el.value}</CardBodyText>
                    </AttributeBox>
                  )
                })}
            </AtrributesList>
          </AtrributesArea>
        </Bottom>
      </Main>
    </Container>
  )
})
