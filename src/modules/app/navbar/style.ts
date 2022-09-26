import styled from 'styled-components'
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
    // color: ${(props: any) => props.theme.primary} !important;
    // border-bottom: 1px solid ${(props: any) => props.theme.primary};
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
    padding: 15px 20px;
    margin: 0 10px;
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
  }
}
`
