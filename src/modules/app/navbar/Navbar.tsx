import { NavLink, useNavigate } from 'react-router-dom'

import { FlexBox } from '../../../shared/flexBox'
import {
  BtnContainer,
  Close,
  HandBurger,
  HeaderContainer,
  LogoContainer,
  NavContainer,
  Navigations,
  NavMenu,
  Row,
  WalletCard,
} from './style'
import { useWeb3React } from '@web3-react/core'

import { useCallback, useEffect, useState } from 'react'
import CustomModal from '../../../shared/customModal'
import { useDispatch, useSelector } from 'react-redux'
import { setConnectWallet } from '../../../logic/redux/actions'
import { Button } from '../../../shared/button'
import useAuth from '../../../wallet_helpers/useAuth'

import logo from '../../../assets/images/logo.svg'
import metamask from '../../../assets/images/metamask.svg'
import walletconnectImg from '../../../assets/images/walletconnect.svg'
import coinbaseSvg from '../../../assets/images/coinbase-icon.svg'
import richardAvatar from '../../../assets/images/Rectangle 15.png'

import { WalletTypes } from '../../../wallet_helpers/constant'
import { RoundSVGIcon, SVGIcon } from '../../../shared/helpers/styled'
import { formatAddress } from '../../../shared/helpers/util'
import { MarkingText, UnderLineText, WalletText } from '../../../shared/Typography'
import { nftsPath, rootPath } from '../../../logic/paths'

export const Navbar = (props: any) => {
  const { path } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const globalSelector = useSelector((state: any) => state)
  const { login, logout } = useAuth()
  const { account, deactivate, chainId }: any = useWeb3React()

  const [disconnectWallet, setDisconnectWallet] = useState(false)
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const { connectWallet } = globalSelector.navbar

  useEffect(() => {
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem('connectorId'))
    //@ts-ignore
    const walletconnect = JSON.parse(localStorage.getItem('walletconnect'))
    if (account) {
      localStorage.setItem('walletConnected', JSON.stringify(true))
    } else if (walletType === 2 && walletconnect === null) {
      logout()
      localStorage.clear()
      setDisconnectWallet(false)
    }
  }, [])

  useEffect(() => {
    if (chainId) {
      localStorage.setItem('chain', chainId.toString())
    }
  }, [chainId])

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

  const handleConnectwallet = (p: boolean) => {
    dispatch(setConnectWallet(p))
    document.body.style.overflow = 'hidden'
  }
  const handleDisConnectwallet = (p: boolean) => {
    setDisconnectWallet(p)
    document.body.style.overflow = 'hidden'
  }
  const disconnect = useCallback(() => {
    deactivate()
    sessionStorage.clear()
    localStorage.clear()
    setDisconnectWallet(false)
    document.body.style.overflow = 'unset'
  }, [deactivate])

  const connect = async (type: any) => {
    console.log('dslahdhsdk', account, type)

    if (account) {
      logout()
      sessionStorage.clear()
      localStorage.clear()
      sessionStorage.clear()
      setDisconnectWallet(false)
    } else {
      try {
        login(type)
        localStorage.setItem('connectorId', JSON.stringify(type))
      } catch (error) {
        console.error(error)
      }
    }
  }
  console.log('currentPath === rootPath ', path === rootPath, path, rootPath)

  return (
    <>
      <HeaderContainer>
        <FlexBox>
          <LogoContainer
            onClick={() => {
              navigate(rootPath)
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
                  to={rootPath}
                >
                  Home
                </NavLink>
                {path === rootPath && (
                  <>
                    <NavLink onClick={() => handleHandBurgerAction('#road-map')} to={'/#road-map'}>
                      Road Map
                    </NavLink>
                    <NavLink onClick={() => handleHandBurgerAction('#team')} to={'/#team'}>
                      Team
                    </NavLink>
                    <NavLink onClick={() => handleHandBurgerAction('#faq')} to={'/#faq'}>
                      FAQ
                    </NavLink>
                  </>
                )}

                <NavLink to={nftsPath} className={({ isActive }) => (isActive ? 'active-route' : 'inactive-route')}>
                  NFTs
                </NavLink>
                {account ? (
                  <>
                    <Button
                      btnType={'walletButton'}
                      className={'walletNavButton'}
                      onClick={() => handleDisConnectwallet(true)}
                      excludeSpan
                      customBorder={`1px solid #646161`}
                      customColor={'#C7C7C7'}
                    >
                      <BtnContainer>
                        <RoundSVGIcon
                          margin="1px 0 0 4px"
                          height="34px"
                          width="34px"
                          src={richardAvatar}
                          alt="user-avatar"
                        />
                        <span>{formatAddress(account)}</span>
                      </BtnContainer>
                    </Button>
                  </>
                ) : (
                  <Button
                    btnType={'walletButton'}
                    className={'walletNavButton'}
                    onClick={() => handleConnectwallet(true)}
                  >
                    {'Connect Wallet'}
                  </Button>
                )}
              </NavMenu>
            </Navigations>
          </NavContainer>
        </FlexBox>
      </HeaderContainer>

      {/* Connect Modal */}
      <CustomModal
        show={connectWallet}
        toggleModal={(p: boolean) => {
          handleConnectwallet(p)
          document.body.style.overflow = 'unset'
        }}
        heading="Select a Wallet"
        subHeading="Connect your wallet to acess ghostball"
      >
        <Row>
          <WalletCard
            className="metamask"
            onClick={() => {
              handleConnectwallet(false)
              connect(WalletTypes.metamask)
              document.body.style.overflow = 'unset'
            }}
          >
            <img src={metamask} alt="metamask" />
            <WalletText>Metamask</WalletText>
          </WalletCard>
          <WalletCard
            className="walletConnect"
            onClick={() => {
              handleConnectwallet(false)
              connect(WalletTypes.coinbase)
              document.body.style.overflow = 'unset'
            }}
          >
            <img src={coinbaseSvg} alt="walletconnect" />
            <WalletText>Coinbase</WalletText>
          </WalletCard>
        </Row>
        <Row>
          <WalletCard
            className="walletConnect"
            onClick={() => {
              handleConnectwallet(false)
              connect(WalletTypes.walletConnect)
              document.body.style.overflow = 'unset'
            }}
          >
            <img src={walletconnectImg} alt="walletconnect" />
            <WalletText>WalletConnect</WalletText>
          </WalletCard>
          <WalletCard
            className="walletConnect"
            onClick={() => {
              document.body.style.overflow = 'unset'
            }}
          >
            <UnderLineText>Coming soon..</UnderLineText>
          </WalletCard>
        </Row>
        <UnderLineText>New to NFT learn more about wallet?</UnderLineText>
      </CustomModal>

      <CustomModal
        show={disconnectWallet}
        toggleModal={(p: boolean) => {
          handleDisConnectwallet(p)
          document.body.style.overflow = 'unset'
        }}
      >
        <Button
          fSize="13px"
          fontLS="0.05em"
          customColor="#BAFF18"
          customBorder={`2px solid #BAFF18`}
          customBgColor="transparent"
          btnType={'borderedfilledButton'}
          onClick={() => disconnect()}
        >
          Disconnect
        </Button>
      </CustomModal>
    </>
  )
}
