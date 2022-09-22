import styled, { css, keyframes } from "styled-components";

import { screenSizes } from "../../styles/theme"

const animateLoader = keyframes`
  from {transform : rotate(0deg)}
  to {transform : rotate(360deg)}
`


// here in the svg you can add the svg according and can animate 
const svgCSS = css`
    font-size : 26px;
    animation : ${animateLoader} linear 2s infinite;
`
const buttonStyles = css`
  outline: none;
  border-radius: 2px;
  color: rgb(0 0 0 / 90%);
  border: 1px solid rgb(0 0 0 / 90%);
  font-size: 1em;
  cursor: pointer;
  font-family: Roboto;
  font-weight: 500;
  transition: all linear 0.3s;
  background-color: ${(props: any) => props.theme.white};
  :hover,
  :focus {
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.primaryButton};
  }
  svg {
      ${svgCSS}
  }
  @media (max-width: ${screenSizes.M}px) {
    font-size: 16px;
  }

  .ripple {
    width: 20px;
    height: 20px;
    position: absolute;
    background: ${(props: any) => props.theme.primary};
    display: block;
    content: "";
    border-radius: 9999px;
    opacity: 1;
    animation: 0.5s ease 1 forwards ripple-effect;
  }
  @keyframes ripple-effect {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(30);
      opacity: 0.375;
    }
    100% {
      transform: scale(90);
      opacity: 0;
    }
  }
  .content {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 0 5px;
    white-space: pre;
    vertical-align: middle;
  }
  position: relative;
  overflow: hidden;
`;

const error = css`
  background: red;
  color: white;
  transition: all linear 0.3s;
  border: 1px solid red;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px red;
  }
`;
const success = css`
  background: green;
  color: white;
  transition: all linear 0.3s;
  border: 1px solid green;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px green;
  }
`;
const warning = css`
  background: ${(props: any) => props.theme.error};
  color: black;
  transition: all linear 0.3s;
  border: 1px solid ${(props: any) => props.theme.error};
  font-size: 12px;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.error};
  }

  :disabled{
    color: ${(props: any) => props.theme.disabledText};
    pointer-events : none;
    cursor : not-allowed;
    background: ${(props: any) => props.theme.disabled};
  }

  min-width: 5em;
  min-height: 3em;
  color: ${(props: any) => props.theme.white};
`;

const walletButton = css`
  background: ${(props: any) => props.theme.secondary};
  border-radius: 50px;
  border: 1px solid ${(props: any) => props.theme.pink1};
  color: ${(props: any) => props.theme.gray2};
  transition: all linear 0.3s;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.primaryButton};
  }

  :disabled{
    color: ${(props: any) => props.theme.disabledText};
    pointer-events : none;
    cursor : not-allowed;
    background: ${(props: any) => props.theme.disabled};
  }

  min-width: 200px;
  height: 50px;
  font-size: 18px;

  @media (max-width: ${screenSizes.M}px) {
    max-width: 200px;
  }
`;
const filledButton = css`
  background: ${(props: any) => props.theme.black};
  border-radius: 10px;
  color: ${(props: any) => props.theme.primary};
  transition: all linear 0.3s;

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 800;
  font-style: italic;

  height: 60px;
  width: 150px;

  :hover,
  :focus {
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.black};
  }

  :disabled{
    color: ${(props: any) => props.theme.disabledText};
    pointer-events : none;
    cursor : not-allowed;
    background: ${(props: any) => props.theme.disabled};
  }
 
`;

const borderedfilledButton = css`
  background: ${(props: any) => props.theme.secondary};
  border-radius: 10px;
  color: ${(props: any) => props.theme.white};
  font-size: 16px;
  border: 2px solid ${(props: any) => props.theme.pink1};
  transition: all linear 0.3s;
  width: 100%;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.primaryButton};
  };

  :disabled{
    color: ${(props: any) => props.theme.disabledText};
    pointer-events : none;
    cursor : not-allowed;
    background: ${(props: any) => props.theme.disabled};
  }
  @media (max-width: ${screenSizes.M}px) {
    font-size: 16px;
  }
`;
const borderedfilledLightButton = css`
  background: ${(props: any) => props.theme.secondaryButton};
  border-radius: 10px;
  color: ${(props: any) => props.theme.white};
  font-size: 16px;
  border: 2px solid ${(props: any) => props.theme.pink1};
  transition: all linear 0.3s;
  width: 100%;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.primaryButton};
  };

  :disabled{
    color: ${(props: any) => props.theme.halfWhite};
    pointer-events : none;
    cursor : not-allowed;
    background: ${(props: any) => props.theme.disabled};
  }
  @media (max-width: ${screenSizes.M}px) {
    font-size: 16px;
  }
`;
const dimBorderedfilledButton = css`
  background: ${(props: any) => props.theme.secondary};
  border-radius: 10px;
  color: ${(props: any) => props.theme.white};
  font-size: 18px;
  border: 1px solid ${(props: any) => props.theme.dimPink};
  transition: all linear 0.3s;
  width: 100%;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.primaryButton};
  };
  min-width: 60px;
  :disabled{
    color: ${(props: any) => props.theme.disabledText};
    pointer-events : none;
    cursor : not-allowed;
    background: ${(props: any) => props.theme.disabled};
  }
  @media (max-width: ${screenSizes.M}px) {
    font-size: 16px;
  }
`;
const roundedfilledButton = css`
  min-width: 65px;
  min-height: 32px;
  background: ${(props: any) => props.theme.gray3};
  border-radius: 10px;
  color: ${(props: any) => props.theme.white};
  font-size: 13px;
  border: 1px solid ${(props: any) => props.theme.pink1};
  transition: all linear 0.3s;
  width: 100%;
  :hover,
  :focus {
    box-shadow: 0px 0px 5px ${(props: any) => props.theme.primaryButton};
  };

  :disabled{
    color: ${(props: any) => props.theme.disabledText};
    pointer-events : none;
    cursor : not-allowed;
    background: ${(props: any) => props.theme.disabled};
  }
  @media (max-width: ${screenSizes.M}px) {
    font-size: 16px;
  }
`;

const disabled = css`
  pointer-events : none;
  cursor : not-allowed;
  opacity: 0.4;
`

const buttonWrapperStyles: any = {
  error,
  success,
  warning,
  disabled,
  walletButton,
  borderedfilledButton,
  roundedfilledButton,
  filledButton,
  dimBorderedfilledButton,
  borderedfilledLightButton
}

interface IButtonWrapper {
  btnType?: "error" | "success" | 'disabled' | 'warning' | 'walletButton' | 'borderedfilledButton| roundedfilledButton | filledButton | dimBorderedfilledButton | borderedfilledLightButton',
  customColor?: string,
  customBgColor?: string,
  customWidth?: string,
  customHeight?: string,
  bRadius?: string,
  fSize?: string,
  customPadding?: string,
  fSizeMobile?: string
  fontLS?: string,
  rippleColor?: string
  minWidthMb?: string
  maxHeightMb?: string
  minWidthSMb?: string
  minWidthSpan?: string
  
}

export const ButtonWrapper = styled.button<IButtonWrapper>`
  ${buttonStyles}
  ${(props: any) => buttonWrapperStyles[props.btnType]};
  color: ${(props: any) => props.customColor};
  background: ${(props: any) => props.customBgColor};
  width: ${(props: any) => props.customWidth};
  height: ${(props: any) => props.customHeight};
  min-height: ${(props: any) => props.customHeight};
  border-radius: ${(props: any) => props.bRadius};
  font-size: ${(props: any) => props.fSize};
  letter-spacing: ${(props: any) => props.fontLS};
  padding: ${(props: any) => props.customPadding};
  :disabled{
    opacity: 0.5;
  };
  @media (max-width: ${screenSizes.M}px) {
    font-size: ${(props: any) => props.fSizeMobile || "14px"};
    min-width: ${(props: any) => props.minWidthMb};
    .content{
      max-height: ${(props: any) => props.maxHeightMb};
      min-width: ${(props: any) => props.minWidthMb};
      max-width: ${(props: any) => props.minWidthMb};
      text-overflow: ellipsis;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  @media (max-width: ${screenSizes.XS}px) {
    min-width: ${(props: any) => props.minWidthSMb};
    max-width: ${(props: any) => props.minWidthSMb};
    .content{
      max-width: ${(props: any) => props.minWidthSMb ? '-webkit-fill-available' : ''};
      min-width: ${(props: any) => props.minWidthSpan};
      text-overflow: ellipsis;
      display: inline-block;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  cursor: ${(props: any) => props.disabled ? 'not-allowed' : props.tile ? 'auto' : 'pointer'};
  .ripple {
    background: ${(props: any) => props.rippleColor};
  }

`
export const ButtonAlignment = styled.div<any>`
  display: flex;
  align-items: ${(props: any) =>
    (props.align == "center" && "center") ||
    (props.align == "start" && "flex-start") ||
    (props.align == "end" && "flex-end")};
  justify-content: ${(props: any) =>
    (props.justify) ||
    "center"
  };
  width: ${(props: any) => props.wrapperWidth}
`;
