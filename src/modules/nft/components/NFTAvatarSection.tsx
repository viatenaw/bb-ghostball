import { Button } from '../../../shared/button'
import { SVGIcon } from '../../../shared/helpers/styled'
import { AvatarArea, ButtonsContainer, SVGElement } from '../style'
import openInNew from '../../../assets/images/open-in-new-icon.svg'

interface INFTAvatarProps {
  nftSvg: any
  layer?: any
  layerColor?: any
}

export const NFTAvatarSection = (props: INFTAvatarProps) => {
  const { nftSvg, layer, layerColor = '' } = props

  return (
    <AvatarArea>
      <SVGElement
        customCss={`
          #Layer${layer} {
            color: ${layerColor}
          }
        `}
        dangerouslySetInnerHTML={{ __html: nftSvg }}
      />
      <ButtonsContainer>
        <Button btnType="tileButton">Preview</Button>
        <Button btnType="tileButton">
          <SVGIcon width="16px" height="16px" src={openInNew} />
          Opensea
        </Button>
      </ButtonsContainer>
    </AvatarArea>
  )
}
