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
  const handleHandBurgerAction = () => {
    setIsNavExpanded((prev) => !prev)
  }
  return (
    <HeaderContainer>
      <FlexBox>
        <LogoContainer
          onClick={() => {
            navigate('/')
          }}
        >
          <img src={logo} alt="logo" />
        </LogoContainer>
        <NavContainer>
          <Navigations>
            <button className="hamburger" onClick={handleHandBurgerAction}>
              {isNavExpanded ? <Close /> : <HandBurger />}
            </button>
            <NavMenu className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
              <NavLink
                className={({ isActive }) => (isActive ? 'active-route' : 'inactive-route')}
                onClick={handleHandBurgerAction}
                to={'/'}
              >
                Home
              </NavLink>
              <NavLink onClick={handleHandBurgerAction} to={'#road-map'}>
                Road Map
              </NavLink>
              <NavLink onClick={handleHandBurgerAction} to={'#team'}>
                Team
              </NavLink>
              <NavLink onClick={handleHandBurgerAction} to={'#faq'}>
                FAQ
              </NavLink>
            </NavMenu>
          </Navigations>
        </NavContainer>
      </FlexBox>
    </HeaderContainer>
  )
})
