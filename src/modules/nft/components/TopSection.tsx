import { Button } from '../../../shared/button'
import { SVGIcon } from '../../../shared/helpers/styled'
import { Top } from '../style'
import leftArrow from '../../../assets/images/left-arrow.svg'
import { useIsMobileScreen } from '../../../shared/hooks/useIsMobileScreen'
import { useNavigate } from 'react-router-dom'

export const TopSection = () => {
  const isMobile = useIsMobileScreen()
  const navigate = useNavigate()

  return (
    <Top>
      <Button onClick={() => navigate(-1)} btnType="borderButton">
        <SVGIcon width="18px" height="15px" src={leftArrow} />
        {!isMobile && 'Back'}
      </Button>
    </Top>
  )
}
