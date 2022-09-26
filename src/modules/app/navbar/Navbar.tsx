import { NavLink, useNavigate } from 'react-router-dom'
import { withTheme } from 'styled-components'
import { FlexBox } from '../../../shared/flexBox'
import { Close, HandBurger, HeaderContainer, LogoContainer, NavContainer, Navigations, NavMenu } from './style'

import logo from '../../../assets/images/logo.svg'
import { useState } from 'react'

export const Navbar: React.FC = withTheme((props: any) => {
  const { theme } = props
  const navigate = useNavigate()
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const handleHandBurgerAction = (id: string) => {
    setIsNavExpanded((prev) => !prev)
    goToElement(id)
  }
  const goToElement = (id: string) => {
    const element: any = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      })
    }
  }
  return (
    <HeaderContainer>
      <FlexBox>
        <LogoContainer
          onClick={() => {
            navigate('/')
            setIsNavExpanded(false)
            goToElement('#about')
          }}
        >
          <img src={logo} alt="logo" />
        </LogoContainer>
        <NavContainer>
          <Navigations>
            <button className="hamburger" onClick={() => handleHandBurgerAction('')}>
              {isNavExpanded ? <Close /> : <HandBurger />}
            </button>
            <NavMenu className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-route' : 'inactive-route')}
                onClick={() => handleHandBurgerAction('#mint')}
                to={'/'}
              >
                Home
              </NavLink>
              <NavLink onClick={() => handleHandBurgerAction('#road-map')} to={'#road-map'}>
                Road Map
              </NavLink>
              <NavLink onClick={() => handleHandBurgerAction('#team')} to={'#team'}>
                Team
              </NavLink>
              <NavLink onClick={() => handleHandBurgerAction('#faq')} to={'#faq'}>
                FAQ
              </NavLink>
            </NavMenu>
          </Navigations>
        </NavContainer>
      </FlexBox>
    </HeaderContainer>
  )
})
