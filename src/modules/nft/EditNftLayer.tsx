import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { withTheme, ThemeProps } from 'styled-components'
import { UseLayerInstance } from '../../blockchain/hooks/useLayerInstance'
import { ComposableNFT } from '../../blockchain/instance'
import { CustomInput } from '../../shared/customInput'
import { b64ToString } from '../../shared/helpers/util'
import { BolderText, CardBodyText } from '../../shared/Typography'
import { ColorPicker } from '../../shared/colorPicker/ColorPicker'
import { NFTAvatarSection } from './components/NFTAvatarSection'
import { TopSection } from './components/TopSection'
import { EditArea, AtrributesHead, Bottom, Container, LayerDescription, Main, InputsContainer } from './style'
import { SELECT_PRIMARY_COLOR, SELECT_SECONDARY_COLOR } from '../../shared/helpers/text'

export const EditNftLayer: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props
  const { id, layer } = useParams<any>()
  const { library } = useWeb3React()
  const [nftSvg, setNftSvg] = useState<any>()
  const [traitValue, setTraitValue] = useState<string>('')
  const [layerColor, setLayerColor] = useState<string>('')
  const [layerColor2, setLayerColor2] = useState<string>('')

  useEffect(() => {
    if (library) init()
  }, [library])

  const init = async () => {
    try {
      mapLayers()
      const tokenB64 = await ComposableNFT.methods.tokenURI(id).call()
      const tokenDetails = JSON.parse(b64ToString(tokenB64))
      const tokenImgJSON = b64ToString(tokenDetails.image)
      setNftSvg(tokenImgJSON)
    } catch (error) {
      console.error('error---', error)
    }
  }

  const mapLayers = async () => {
    const allLayersContracts = await ComposableNFT.methods.getAllLayerContracts().call()
    await Promise.all(
      allLayersContracts.map(async (addr: string) => {
        const LayerInstance = UseLayerInstance(addr)
        const layerName = await LayerInstance.methods.layerName().call()
        console.log('---------------', layerName === `Layer${layer}`, layerName, `Layer${layer}`)

        if (layerName === `Layer${layer}`) {
          const options = await LayerInstance.methods.getOptionMetadataByTokenId(id).call()
          const trait = JSON.parse(options)
          setTraitValue(trait.value)
          console.log('trait.value', addr)
        }
        return layerName
      })
    )
  }
  const handleColorChange = (e: any) => {
    setLayerColor(e.target.value)
    setTraitValue(e.target.value)
  }
  const handleColorChange2 = (e: any) => {
    setLayerColor2(e.target.value)
  }

  return (
    <Container>
      <Main>
        <TopSection />
        <Bottom gap="40px">
          <NFTAvatarSection layer={layer} nftSvg={nftSvg} layerColor={layerColor} />
          <EditArea>
            <AtrributesHead>
              <BolderText fSize="26px" fWeight="700" fColor={theme.white}>
                Ghostball #{id}
              </BolderText>
            </AtrributesHead>
            <LayerDescription>
              <BolderText fontSizeM="26px" fColor={theme.primary}>
                {layer}: {traitValue}
              </BolderText>
              <CardBodyText>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                visual form of a document or a typeface without relying on meaningful content.
              </CardBodyText>
            </LayerDescription>
            <InputsContainer>
              <ColorPicker
                headerText={SELECT_PRIMARY_COLOR}
                pickerId="1"
                required
                onChange={handleColorChange}
                value={layerColor}
              />
              <ColorPicker
                headerText={SELECT_SECONDARY_COLOR}
                pickerId="2"
                onChange={handleColorChange2}
                value={layerColor2}
              />
            </InputsContainer>
          </EditArea>
        </Bottom>
      </Main>
    </Container>
  )
})
