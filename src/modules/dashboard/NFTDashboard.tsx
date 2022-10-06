import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ThemeProps, withTheme } from 'styled-components'

import { Container, NFTCardContainer, NFTListContainer, SVGImage, TextWrapper, Wrapper } from './style'
import { b64ToString, FETCH_NFTS_URI, stringToObjectURL } from '../../shared/helpers/util'
import { composableAddress } from '../../blockchain/abi/ComposableNFT'
import { BolderText, WalletText } from '../../shared/Typography'
import { ComposableNFT } from '../../blockchain/instance'

export const NFTDashboard: React.FC = withTheme((props: ThemeProps<any>) => {
  const { account, active, library, chainId } = useWeb3React()
  const { theme } = props
  const [userNFTs, setUserNFTs] = useState<any>([])

  useEffect(() => {
    if (library) init()
  }, [library])

  const init = async () => {
    try {
      const url = `${FETCH_NFTS_URI}/${account}/nft?chain=0X${chainId}&format=decimal&token_addresses=${composableAddress}`
      const { data } = await axios.get(url, {
        headers: {
          'X-API-Key': 'test',
          accept: 'application/json',
        },
      })
      const { result } = data
      setUserNFTs(result)
      // console.info("data", result)
    } catch (error) {
      console.error('error initializing', error)
    }
  }

  return (
    <Container>
      <div>
        <Wrapper>
          <TextWrapper>
            <BolderText fontSizeM="20px" fColor={theme.white}>
              Ghostballs in Your Wallet
            </BolderText>
            <span>{userNFTs?.length || 0}</span>
          </TextWrapper>
          <div>
            <NFTListContainer>
              {userNFTs.map((nft: any, index: number) => {
                return <UserNFT theme={theme} nft={nft} key={index} />
              })}
            </NFTListContainer>
          </div>
        </Wrapper>
      </div>
    </Container>
  )
})

const UserNFT = (props: any) => {
  const { nft, theme } = props
  const { library } = useWeb3React()
  const nftId = nft.token_id
  let tokenImgJSON: any = undefined
  const [nftImageSrc, setNftImageSrc] = useState<any>()
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/nfts/${nftId}`)
  }
  useEffect(() => {
    if (library) init()
  }, [library])

  const init = async () => {
    if (nft.metadata) {
      const metadata = nft.metadata.replaceAll('\\', '')
      const nftDetails = JSON.parse(metadata)
      tokenImgJSON = b64ToString(nftDetails.image)
    } else {
      tokenImgJSON = await ComposableNFT.methods._generateSVG(nftId).call()
    }
    setNftImageSrc(stringToObjectURL(tokenImgJSON))
  }
  return (
    <NFTCardContainer onClick={handleClick}>
      <SVGImage width="100%" height="255px" src={nftImageSrc} />
      <WalletText fontSizeM="20px" fWeight="700">
        Ghostball #{nftId}
      </WalletText>
    </NFTCardContainer>
  )
}
