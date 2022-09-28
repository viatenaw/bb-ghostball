import styled, { ThemeProps } from 'styled-components'
import { HiOutlineMenu } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import { screenSizes } from '../../../styles/theme'
import starBG from '../../../assets/images/star-bg.svg'

export const HeaderContainer = styled.header`
  padding: 10px 30px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(8px);
  background: #000 url(${starBG});
  .active-route {
    color: ${(props: any) => props.theme.primary} !important;
    border-bottom: 1px solid ${(props: any) => props.theme.primary};
  }
  z-index: 999;
  @media (min-width: ${screenSizes.XXL}px) {
    align-items: center;
    display: flex;
    flex-wrap: inherit;
    justify-content: space-between;
  }
`
export const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
  :hover {
    cursor: pointer;
  }
`
export const HandBurger = styled(HiOutlineMenu)<any>`
  cursor: pointer;
  font-size: xxx-large;
  color: ${(props: any) => props.theme.white};
`
export const Close = styled(IoCloseOutline)<any>`
  cursor: pointer;
  font-size: xxx-large;
  color: ${(props: any) => props.theme.white};
`
export const NavContainer = styled.div`
  display: flex;
`
export const NavMenu = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
`
export const Navigations = styled.nav`
  display: flex;
  align-items: center;
  line-height: 22px;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  a {
    font-size: 18px;
    text-decoration: none;
    color: ${(props: any) => props.theme.white};
    transition: border-color .3s ease;
    transition: border-width .3s ease;
    border-bottom: 0px solid;
    &:hover {
        border-width: 1px;
        border-color: ${(props: any) => props.theme.primary};
        color: ${(props: any) => props.theme.primary} !important;
        transition: color 1.5s ease;
    }
  }
  .hamburger {
    display: none;
    background: #000 url(${starBG});
    border: 0;
  }
  @media screen and (max-width: 811px) {
    .hamburger {
      display: block;
    }
    .navigation-menu {
      display: none;
    }
    .navigation-menu.expanded {
      display: flex;
      height: 100vh;
      width: 100vw;
      background: #000 url(${starBG});
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translate(-50%, 0%);
      align-items: center;
    }
    a {
      padding: 0px;
    }
  }
}
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 6px;
  backdrop-filter: blur(2.5px);
  span {
    font-size: 14px;
    font-style: italic;
    line-height: 17px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    padding-top: 1px;
  }
`

export const WalletCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 255px;
  height: 145px;
  background: ${(props: ThemeProps<any>) => props.theme.fadedWhite};
  justify-content: center;
  align-items: center;
  img {
    height: 55px;
    @media (max-width: ${screenSizes.M}px) {
      height: 40px;
    }
  }
  padding: 0 5px;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`
export const Row = styled.div`
  display: flex;
  gap: 24px;
`
