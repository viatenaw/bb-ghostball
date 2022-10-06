import { useNavigate, useParams } from 'react-router-dom'
import { ThemeProps, withTheme } from 'styled-components'
import {
  Bottom,
  Container,
  Main,
  AtrributesArea,
  AvatarArea,
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

import { b64ToString, stringToObjectURL } from '../../shared/helpers/util'
import { TopSection } from './components/TopSection'
import { NFTAvatarSection } from './components/NFTAvatarSection'

const Buffer = require('buffer/').Buffer

export const NFT: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props
  const navigate = useNavigate()

  const { id } = useParams<any>()
  const [nftSvg, setNftSvg] = useState<any>()
  const [nftAttributes, setNftAttributes] = useState<any>([])
  const { account, active, library } = useWeb3React()
  useEffect(() => {
    if (library) init()
  }, [library])
  const init = async () => {
    try {
      console.log('tokenImgJSON')

      setNftAttributes([
        { trait_type: 'LayerBackground', value: 'red' },
        { trait_type: 'LayerBody', value: 'yellow' },
      ])
      const tokenB64 = await ComposableNFT.methods.tokenURI(id).call()
      const tokenDetails = JSON.parse(b64ToString(tokenB64))
      const tokenImgJSON = b64ToString(tokenDetails.image)
      console.log('tokenImgJSON', tokenB64)

      // setNftAttributes(tokenDetails.attributes)
      setNftSvg(tokenImgJSON)
    } catch (error) {
      console.error('error---', error)
    }
  }

  const editLayer = (layer: IEditLayerProps) => {
    navigate(`/nfts/${id}/${layer.trait_type.replace('Layer', '')}`)
  }
  console.log('nftAttributes', nftAttributes)

  return (
    <Container>
      <Main>
        <TopSection />
        <Bottom>
          <NFTAvatarSection nftSvg={nftSvg} />
          <AtrributesArea>
            <AtrributesHead>
              <BolderText fontSizeM="26px" fColor={theme.white}>
                Ghostball #{id}
              </BolderText>
              <GreenTile>{nftAttributes.length} Attributes</GreenTile>
            </AtrributesHead>
            <AtrributesList>
              {nftAttributes &&
                nftAttributes.map((el: any, idx: any) => {
                  console.log('el', el)
                  return (
                    <AttributeBox onClick={() => editLayer(el)} key={idx}>
                      <WalletText fontSizeM="18px" wSpace="nowrap" fWeight="700" fColor={theme.primary}>
                        {el.trait_type.replace('Layer', '')}
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
interface IEditLayerProps {
  trait_type: string
  value: string
}
