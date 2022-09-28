import { ButtonWrapper, ButtonAlignment } from './style'
import { useEffect, useState } from 'react'

interface ButtonProps {
  children?: React.ReactNode
  btnType?: any
  align?: string
  justify?: string
  onClick?: any
  customColor?: string
  customBgColor?: string
  customWidth?: string
  isDisabled?: boolean
  className?: string
  tile?: boolean
  customPadding?: string
  bRadius?: string
  fSize?: string
  customHeight?: string
  fSizeMobile?: string
  fontLS?: string
  rippleColor?: string
  wrapperWidth?: string
  minWidthMb?: string
  maxHeightMb?: string
  minWidthSMb?: string
  minWidthSpan?: string
  shadowColor?: string
  customBorder?: string
  excludeSpan?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    customBorder,
    shadowColor,
    children,
    minWidthSpan,
    minWidthSMb,
    wrapperWidth,
    fontLS,
    maxHeightMb,
    minWidthMb,
    btnType,
    fSize,
    rippleColor,
    fSizeMobile,
    align,
    justify,
    onClick,
    customHeight,
    customColor,
    customBgColor,
    customWidth,
    isDisabled,
    className,
    tile,
    customPadding,
    bRadius,
    excludeSpan = false,
  } = props

  const [isRippling, setIsRippling] = useState<boolean>(false)
  const [coords, setCoords] = useState({ x: -1, y: -1 })

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 300)
    } else setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  const handleClick = (e: any) => {
    const rect = e.target.getBoundingClientRect()
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    onClick(e)
  }
  return (
    <ButtonAlignment wrapperWidth={wrapperWidth} className={className} justify={justify} align={align}>
      <ButtonWrapper
        customBorder={customBorder}
        shadowColor={shadowColor}
        fSize={fSize}
        maxHeightMb={maxHeightMb}
        minWidthMb={minWidthMb}
        minWidthSMb={minWidthSMb}
        minWidthSpan={minWidthSpan}
        customHeight={customHeight}
        fSizeMobile={fSizeMobile}
        bRadius={bRadius}
        disabled={isDisabled}
        customPadding={customPadding}
        onClick={handleClick}
        customColor={customColor}
        customBgColor={customBgColor}
        customWidth={customWidth}
        fontLS={fontLS}
        btnType={btnType}
        rippleColor={rippleColor}
      >
        {isRippling ? (
          <span
            className="ripple"
            style={{
              left: coords.x,
              top: coords.y,
            }}
          />
        ) : (
          ''
        )}
        {!excludeSpan ? <span className="content">{children}</span> : children}
      </ButtonWrapper>
    </ButtonAlignment>
  )
}
