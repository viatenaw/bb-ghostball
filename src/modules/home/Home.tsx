import { withTheme, ThemeProps } from 'styled-components'
import {
  Avatar1,
  Avatar2,
  AvatarContainer,
  BlankItem,
  Card,
  CardsContainer,
  CardTextWrapper,
  CardWrapper,
  ContainerAbout,
  ContainerGuide,
  ContainerRoadMap,
  ContainerTeam,
  CornerBox,
  DetailsContainer,
  FlexContainer,
  FloatingTile,
  ImageWrapper,
  LineLeft,
  LineRight,
  RoadMapHead,
  TeamCardsContainer,
} from './style'
import { BigBolderText, BolderText, CardBodyText, CardHeadText, SmallText } from '../../shared/Typography'
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
  DETAILS_ABOUT_TEXT,
  DETAILS_BUY_ETH_TEXT,
  DETAILS_DOWNLOAD_METAMASK_TEXT,
  DETAILS_MINT_READY_TEXT,
  DOWNLOAD_METAMASK_TEXT,
  GUIDE_DETAILS_TEXT,
  GUIDE_HEAD_TEXT,
  MINT_READY_TEXT,
  ROAD_MAP_DETAILS_TEXT,
  ROAD_MAP_HEAD_TEXT,
  TEAM_TEXT,
} from '../../shared/helpers/text'
import { Button } from '../../shared/button'
import { FlexCol, SVGIcon } from '../../shared/helpers/styled'

import gunGhostSvg from '../../assets/images/gun-ghost-avatar.svg'
import capGhostSvg from '../../assets/images/cap-ghost-avatar.svg'
import metamaskSvg from '../../assets/images/metamask-icon.svg'
import ethereumSvg from '../../assets/images/ethereum-icon.svg'
import ghostLogo from '../../assets/images/logo-black.svg'
import targetIcon from '../../assets/images/target-icon.svg'
import richardAvatar from '../../assets/images/Rectangle 15.png'

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
  const { theme } = props

  return (
    <>
      <AboutArea theme={theme} />
      <GuideArea theme={theme} />
      <RoadMap theme={theme} />
      <Team theme={theme} />
    </>
  )
})

const GuideArea = (props: any) => {
  const { theme } = props

  return (
    <ContainerGuide>
      <FlexContainer>
        <AvatarContainer>
          <Avatar2 src={capGhostSvg} alt="cap-ghost" />
          <FlexCol gap="16px">
            <BolderText fColor={theme.black}>{GUIDE_HEAD_TEXT}</BolderText>
            <SmallText fColor={theme.black}>{GUIDE_DETAILS_TEXT}</SmallText>
          </FlexCol>
        </AvatarContainer>
        <DetailsContainer>
          <MetamaskGuide theme={theme} />
          <EthereumGuide theme={theme} />
          <MintGuide theme={theme} />
        </DetailsContainer>
      </FlexContainer>
    </ContainerGuide>
  )
}
const MetamaskGuide = (props: any) => {
  const { theme } = props

  return (
    <FlexCol gap="30px">
      <FlexCol gap="12px">
        <SVGIcon src={metamaskSvg} alt="metamask-icon" />
        <FlexCol gap="16px">
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
  )
}

const EthereumGuide = (props: any) => {
  const { theme } = props

  return (
    <FlexCol gap="30px">
      <FlexCol gap="12px">
        <SVGIcon src={ethereumSvg} alt="metamask-icon" />
        <FlexCol gap="16px">
          <BolderText fColor={theme.black}>{BUY_ETH_TEXT}</BolderText>
          <SmallText fColor={theme.black}>{DETAILS_BUY_ETH_TEXT}</SmallText>
        </FlexCol>
      </FlexCol>
    </FlexCol>
  )
}

const MintGuide = (props: any) => {
  const { theme } = props

  return (
    <FlexCol gap="30px">
      <FlexCol gap="12px">
        <SVGIcon height="60px" width="60px" src={ghostLogo} alt="metamask-icon" />
        <FlexCol gap="16px">
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
  )
}

const AboutArea = (props: any) => {
  const { theme } = props
  return (
    <ContainerAbout>
      <FlexContainer>
        <AvatarContainer>
          <Avatar1 src={gunGhostSvg} alt="gun-ghost" />
          <FloatingTile>0/10000</FloatingTile>
        </AvatarContainer>
        <DetailsContainer>
          <FlexCol gap="16px">
            <BolderText fColor={theme.white}>{ABOUT_TEXT}</BolderText>
            <SmallText fColor={theme.white}>{DETAILS_ABOUT_TEXT}</SmallText>
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
        </DetailsContainer>
      </FlexContainer>
    </ContainerAbout>
  )
}

const RoadMap = (props: any) => {
  const { theme } = props
  return (
    <ContainerRoadMap>
      <RoadMapHead>
        <BigBolderText fColor={theme.white}>{ROAD_MAP_HEAD_TEXT}</BigBolderText>
        <SmallText fColor={theme.white}>{ROAD_MAP_DETAILS_TEXT}</SmallText>
      </RoadMapHead>
      <CardsContainer>
        <RoadMapCard headText={CARD_1_HEAD_TEXT} bodyText={CARD_1_DETAILS_TEXT} year="2018" rightLine></RoadMapCard>
        <RoadMapCard
          headText={CARD_2_HEAD_TEXT}
          bodyText={CARD_2_DETAILS_TEXT}
          year="2019"
          leftLine
          rightLine
        ></RoadMapCard>
        <RoadMapCard
          headText={CARD_3_HEAD_TEXT}
          bodyText={CARD_3_DETAILS_TEXT}
          year="2020"
          leftLine
          corner
        ></RoadMapCard>
      </CardsContainer>
      <CardsContainer marginTop="76px">
        <RoadMapCard
          headText={CARD_4_HEAD_TEXT}
          bodyText={CARD_4_DETAILS_TEXT}
          year="2021"
          leftLine
          rightLine
        ></RoadMapCard>
        <RoadMapCard
          headText={CARD_5_HEAD_TEXT}
          bodyText={CARD_5_DETAILS_TEXT}
          year="2022"
          leftLine
          rightLine
        ></RoadMapCard>
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
          <CardBodyText>{bodyText}</CardBodyText>
        </CardTextWrapper>
      </Card>
    </CardWrapper>
  )
}

const Team = (props: any) => {
  const { theme } = props
  return (
    <ContainerTeam>
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
      <SVGIcon width="185px" height="185px" src={richardAvatar} alt="team-avatar-rechard" />
      <CardBodyText fSize="20px" fColor={'#000'}>
        @RichardRyan
      </CardBodyText>
    </FlexCol>
  )
}
