import { withTheme, ThemeProps } from 'styled-components'
import {
  AboutBody,
  AboutLeft,
  Avatar1,
  Avatar2,
  AvatarContainer,
  BlankItem,
  Card,
  CardsContainer,
  CardTextWrapper,
  CardWrapper,
  ContainerAbout,
  ContainerFAQ,
  ContainerGuide,
  ContainerRoadMap,
  ContainerTail,
  ContainerTeam,
  CornerBox,
  DetailsContainer,
  DetailsContainerAbout,
  FAQContainer,
  FAQItem,
  FlexContainer,
  FloatingTile,
  ImageWrapper,
  LineLeft,
  LineRight,
  ProgressBar,
  ProgressContainer,
  RoadMapHead,
  TeamCardsContainer,
} from './style'
import { BigBolderText, BolderText, CardBodyText, CardHeadText, MarkingText, SmallText } from '../../shared/Typography'
import {
  ABOUT_TEXT,
  BUY_ETH_TEXT,
  CARD_1_DETAILS_TEXT,
  CARD_1_HEAD_TEXT,
  CARD_2_DETAILS_TEXT,
  CARD_2_HEAD_TEXT,
  CARD_3_DETAILS_TEXT,
  CARD_3_HEAD_TEXT,
  CARD_4_DETAILS_TEXT,
  CARD_4_HEAD_TEXT,
  CARD_5_DETAILS_TEXT,
  CARD_5_HEAD_TEXT,
  CR_TEXT,
  DETAILS_ABOUT_TEXT1,
  DETAILS_ABOUT_TEXT2,
  DETAILS_BUY_ETH_TEXT,
  DETAILS_DOWNLOAD_METAMASK_TEXT,
  DETAILS_MINT_READY_TEXT,
  DOWNLOAD_METAMASK_TEXT,
  FAQ_TEXT,
  GUIDE_DETAILS_TEXT,
  GUIDE_HEAD_TEXT,
  MINT_READY_TEXT,
  ROAD_MAP_DETAILS_TEXT,
  ROAD_MAP_HEAD_TEXT,
  TEAM_TEXT,
} from '../../shared/helpers/text'
import { Button } from '../../shared/button'
import { Circle, CircleCntr, FlexCol, SVGIcon } from '../../shared/helpers/styled'

import gunGhostSvg from '../../assets/images/gun-ghost-avatar.svg'
import capGhostSvg from '../../assets/images/cap-ghost-avatar.svg'
import metamaskSvg from '../../assets/images/metamask-icon.svg'
import ethereumSvg from '../../assets/images/ethereum-icon.svg'
import ghostLogo from '../../assets/images/logo-black.svg'
import targetIcon from '../../assets/images/target-icon.svg'
import downIcon from '../../assets/images/down-icon.svg'
import richardAvatar from '../../assets/images/Rectangle 15.png'

import { useIsMobileScreen } from '../../shared/hooks/useIsMobileScreen'
import { useEffect, useRef, useState } from 'react'

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props

  return (
    <>
      <AboutArea theme={theme} />
      <GuideArea theme={theme} />
      <RoadMap theme={theme} />
      <Team theme={theme} />
      <FAQSection theme={theme} />
      <Tail theme={theme} />
    </>
  )
})

const AboutArea = (props: any) => {
  const { theme } = props
  return (
    <ContainerAbout id="#about">
      <FlexContainer>
        <AvatarContainer>
          <Avatar1 src={gunGhostSvg} alt="gun-ghost" />
          <FloatingTile>0/10000</FloatingTile>
        </AvatarContainer>
        <DetailsContainerAbout>
          <FlexCol padding="0 20px" gap="16px">
            <BolderText fColor={theme.white}>{ABOUT_TEXT}</BolderText>
            <SmallText fontSizeM="14px" fColor={theme.white}>
              {DETAILS_ABOUT_TEXT1}
            </SmallText>
            <SmallText fontSizeM="14px" fColor={theme.white}>
              {DETAILS_ABOUT_TEXT2}
            </SmallText>
          </FlexCol>
          <Button
            customBorder="none"
            shadowColor={theme.primary}
            rippleColor={theme.black}
            customBgColor={theme.primary}
            customColor={theme.black}
            btnType="filledButton"
          >
            MINT NOW
          </Button>
        </DetailsContainerAbout>
      </FlexContainer>
    </ContainerAbout>
  )
}
const GuideArea = (props: any) => {
  const { theme } = props
  const progressRef: any = useRef()
  const isMobile = useIsMobileScreen()
  const [scrollProgress, setScrollProgress] = useState(0)
  const progressBarHandler = (e: any) => {
    var rect = progressRef.current.getBoundingClientRect()
    let min, max
    if (!isMobile) {
      min = 0
      max = 400
    } else {
      min = -200
      max = 400
    }
    if (rect.top > min && rect.top < max) {
      let scrolled = (100 - (rect.top * 100) / (max - min)) * 0.5 // multiplying by 0.5 to make it smoother
      if (scrolled < 50 && !isMobile) scrolled = scrolled * 1.5
      setScrollProgress(scrolled)
    } else if (rect.top > max) {
      setScrollProgress(0)
    } else if (rect.top < min - 200) {
      setScrollProgress(100)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', progressBarHandler)
    return () => window.removeEventListener('scroll', progressBarHandler)
  }, [])

  return (
    <ContainerGuide>
      <FlexContainer>
        <AvatarContainer>
          <Avatar2 src={capGhostSvg} alt="cap-ghost" />
          <FlexCol padding="0 20px" gap="16px">
            <BolderText fColor={theme.black}>{GUIDE_HEAD_TEXT}</BolderText>
            <SmallText fontSizeM="14px" fColor={theme.black}>
              {GUIDE_DETAILS_TEXT}
            </SmallText>
          </FlexCol>
        </AvatarContainer>
        <DetailsContainer>
          <ProgressContainer ref={progressRef}>
            <ProgressBar height={scrollProgress} />
          </ProgressContainer>
          <MetamaskGuide scrollProgress={scrollProgress} theme={theme} />
          <EthereumGuide scrollProgress={scrollProgress} theme={theme} />
          <MintGuide scrollProgress={scrollProgress} theme={theme} />
        </DetailsContainer>
      </FlexContainer>
    </ContainerGuide>
  )
}
const MetamaskGuide = (props: any) => {
  const { theme, scrollProgress } = props

  return (
    <AboutBody>
      <AboutLeft>
        <CircleCntr>
          <Circle isActive={scrollProgress > 0}>
            <MarkingText fWeight="500">1</MarkingText>
          </Circle>
        </CircleCntr>
      </AboutLeft>
      <FlexCol padding="15px 0 0 0" gap="30px">
        <FlexCol gap="12px">
          <SVGIcon src={metamaskSvg} alt="metamask-icon" />
          <FlexCol maxwidthM="280px" gap="16px">
            <BolderText fColor={theme.black}>{DOWNLOAD_METAMASK_TEXT}</BolderText>
            <SmallText fColor={theme.black}>{DETAILS_DOWNLOAD_METAMASK_TEXT}</SmallText>
          </FlexCol>
        </FlexCol>
        <Button
          justify="start"
          rippleColor={theme.black}
          customBgColor={theme.primary}
          customColor={theme.black}
          btnType="filledButton"
        >
          Link metamask
        </Button>
      </FlexCol>
    </AboutBody>
  )
}

const EthereumGuide = (props: any) => {
  const { theme, scrollProgress } = props

  return (
    <AboutBody>
      <AboutLeft>
        <CircleCntr>
          <Circle isActive={scrollProgress > 49}>
            <MarkingText fWeight="500">2</MarkingText>
          </Circle>
        </CircleCntr>
      </AboutLeft>
      <FlexCol padding="15px 0 0 0" gap="30px">
        <FlexCol gap="12px">
          <SVGIcon src={ethereumSvg} alt="metamask-icon" />
          <FlexCol maxwidthM="280px" gap="16px">
            <BolderText fColor={theme.black}>{BUY_ETH_TEXT}</BolderText>
            <SmallText fColor={theme.black}>{DETAILS_BUY_ETH_TEXT}</SmallText>
          </FlexCol>
        </FlexCol>
      </FlexCol>
    </AboutBody>
  )
}

const MintGuide = (props: any) => {
  const { theme, scrollProgress } = props

  return (
    <AboutBody>
      <AboutLeft zIndex="1" bg>
        <CircleCntr>
          <Circle isActive={67 < scrollProgress}>
            <MarkingText fWeight="500">3</MarkingText>
          </Circle>
        </CircleCntr>
      </AboutLeft>
      <FlexCol padding="15px 0 0 0" gap="30px">
        <FlexCol gap="12px">
          <SVGIcon height="60px" width="60px" src={ghostLogo} alt="metamask-icon" />
          <FlexCol maxwidthM="280px" gap="16px">
            <BolderText fColor={theme.black}>{MINT_READY_TEXT}</BolderText>
            <SmallText fColor={theme.black}>{DETAILS_MINT_READY_TEXT}</SmallText>
          </FlexCol>
        </FlexCol>
        <Button
          justify="start"
          rippleColor={theme.black}
          customBgColor={theme.primary}
          customColor={theme.black}
          btnType="filledButton"
        >
          Mint Ghost
        </Button>
      </FlexCol>
    </AboutBody>
  )
}

const RoadMap = (props: any) => {
  const { theme } = props
  const isMobileScreen = useIsMobileScreen()
  return (
    <ContainerRoadMap id="#road-map">
      <RoadMapHead>
        <BigBolderText fColor={theme.white}>{ROAD_MAP_HEAD_TEXT}</BigBolderText>
        <SmallText fontSizeM="14px" fColor={theme.white}>
          {ROAD_MAP_DETAILS_TEXT}
        </SmallText>
      </RoadMapHead>
      <CardsContainer>
        <RoadMapCard
          headText={CARD_1_HEAD_TEXT}
          bodyText={CARD_1_DETAILS_TEXT}
          year="2018"
          rightLine
          leftLine={isMobileScreen}
        />
        <RoadMapCard headText={CARD_2_HEAD_TEXT} bodyText={CARD_2_DETAILS_TEXT} year="2019" leftLine rightLine />
        <RoadMapCard
          headText={CARD_3_HEAD_TEXT}
          bodyText={CARD_3_DETAILS_TEXT}
          year="2020"
          leftLine
          corner={!isMobileScreen}
          rightLine={isMobileScreen}
        />
      </CardsContainer>
      <CardsContainer marginTop="76px">
        <RoadMapCard headText={CARD_4_HEAD_TEXT} bodyText={CARD_4_DETAILS_TEXT} year="2021" leftLine rightLine />
        <RoadMapCard headText={CARD_5_HEAD_TEXT} bodyText={CARD_5_DETAILS_TEXT} year="2022" leftLine rightLine />
      </CardsContainer>
    </ContainerRoadMap>
  )
}
interface ICardProps {
  leftLine?: boolean
  rightLine?: boolean
  corner?: boolean
  year?: string
  headText: string
  bodyText: string
}
const RoadMapCard = (props: ICardProps) => {
  const { leftLine, rightLine, corner, year, headText, bodyText } = props
  return (
    <CardWrapper>
      <BigBolderText tAlign="center" fColor="#ffffff" fSize="24px">
        {year}
      </BigBolderText>
      <ImageWrapper>
        {leftLine && <LineLeft />}
        <SVGIcon src={targetIcon} alt="target-icon" />
        {rightLine && <LineRight />}
        {corner && <CornerBox />}
      </ImageWrapper>

      <Card>
        <CardTextWrapper>
          <CardHeadText>{headText}</CardHeadText>
          <CardBodyText fontSizeM="14px">{bodyText}</CardBodyText>
        </CardTextWrapper>
      </Card>
    </CardWrapper>
  )
}

const Team = (props: any) => {
  const { theme } = props
  return (
    <ContainerTeam id="#team">
      <RoadMapHead>
        <BigBolderText fColor={theme.black}>{TEAM_TEXT}</BigBolderText>
      </RoadMapHead>
      <TeamCardsContainer>
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <BlankItem />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <BlankItem />
      </TeamCardsContainer>
    </ContainerTeam>
  )
}
const TeamCard = (props: any) => {
  const { theme } = props

  return (
    <FlexCol align="center" gap="18px">
      <SVGIcon
        width="185px"
        height="185px"
        heightM="165px"
        widthM="150px"
        src={richardAvatar}
        alt="team-avatar-rechard"
      />
      <CardBodyText fSize="20px" fColor={'#000'}>
        @RichardRyan
      </CardBodyText>
    </FlexCol>
  )
}

const FAQSection = (props: any) => {
  const { theme } = props

  return (
    <ContainerFAQ id="#faq">
      <RoadMapHead>
        <BigBolderText fColor={theme.black}>{FAQ_TEXT}</BigBolderText>
      </RoadMapHead>
      <FAQContainer>
        <li>
          <FAQItem>
            <SmallText>What is Ghostball?</SmallText>
            <SVGIcon width="20px" height="12px" src={downIcon} alt="down-icon" />
          </FAQItem>
        </li>
        <li>
          <FAQItem>
            <SmallText>What makes Ghostball different from other NFT pfp projects on Ethereum?</SmallText>
            <SVGIcon width="20px" height="12px" src={downIcon} alt="down-icon" />
          </FAQItem>
        </li>
        <li>
          <FAQItem>
            <SmallText>Who are you? And is your team doxxed?</SmallText>
            <SVGIcon width="20px" height="12px" src={downIcon} alt="down-icon" />
          </FAQItem>
        </li>
        <li>
          <FAQItem>
            <SmallText>Do you have a roadmap?</SmallText>
            <SVGIcon width="20px" height="12px" src={downIcon} alt="down-icon" />
          </FAQItem>
        </li>
        <li>
          <FAQItem>
            <SmallText>How much will it cost?</SmallText>
            <SVGIcon width="20px" height="12px" src={downIcon} alt="down-icon" />
          </FAQItem>
        </li>
        <li>
          <FAQItem>
            <SmallText>Do I need an Ethereum wallet to buy a Ghostball NFT?</SmallText>
            <SVGIcon width="20px" height="12px" src={downIcon} alt="down-icon" />
          </FAQItem>
        </li>
      </FAQContainer>
    </ContainerFAQ>
  )
}

const Tail = (props: any) => {
  const { theme } = props
  return (
    <ContainerTail>
      <SmallText fColor={theme.white}>{CR_TEXT}</SmallText>
    </ContainerTail>
  )
}
