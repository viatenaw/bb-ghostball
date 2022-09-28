export const headerHeight = '56px'

export interface Sizes {
  XXS: number | string
  XS: number | string
  S: number | string
  M: number | string
  ML?: number | string
  L: number | string
  XL: number | string
  XXL: number | string
}

export const gapSizes: Partial<Sizes> = {
  S: '10px',
  M: '20px',
  L: '30px',
  XL: '40px',
  XXL: '50px',
}

export const screenSizes: Partial<Sizes> = {
  XXS: 360,
  XS: 480,
  S: 640,
  M: 768,
  ML: 820,
  L: 1024,
  XL: 1280,
  XXL: 1440,
}

export const fontSizes: Sizes = {
  XXS: '14px',
  XS: '16px',
  S: '18px',
  M: '24px',
  L: '32px',
  XL: '36px',
  XXL: '48px',
}

export const lineHeights: Sizes = {
  XXS: '14px',
  XS: '24px',
  S: '18px',
  M: '24px',
  L: '32px',
  XL: '36px',
  XXL: '48px',
}

export const textAreaSizes = {
  S: '92px',
  M: '108px',
  L: '128px',
}

interface ThemeWithStates {
  [propName: string]: string
}

export interface Colors {
  white: string
  black: string
  pink: string
  darkBlue: string
  darkGray: string
  white1: string
  pink1: string
  pink2: string
  gray1: string
  gray2: string
  purple: string
  darkestGray: string
  purple1: string
  purple2: string
  gray3: string
  fadedWhite: string
  dimPink: string
  pink3: string
  blackFaded: string
  darkBlue1: string
  halfWhite: string
  pink4: string
  blackSuperFaded: string
  brightGreen: string
}

export const colors: Colors = {
  white: '#ffffff',
  black: '#000000',
  pink: '#D512D5',
  purple: '#280F4C',
  fadedWhite: '#ffffff33',
  darkBlue: '#0D0E21',
  darkGray: '#667085',
  white1: '#ffffff4d',
  pink1: '#D412D4',
  pink2: '#b912be',
  gray1: '#646161',
  gray2: '#C7C7C7',
  darkestGray: '#0F111E',
  purple1: '#d512d533',
  purple2: '#ff6fff4d',
  gray3: '#343643',
  pink3: '#FF6FFF',
  pink4: '#BE61FF',
  blackFaded: '#0000004d',
  blackSuperFaded: '#00000029',
  dimPink: '#d512d54d',
  darkBlue1: '#0d0e2166',
  halfWhite: '#ffffff80',

  brightGreen: '#BAFF18',
}

export interface Theme {
  [propName: string]: string | ThemeWithStates | { [propName: string]: ThemeWithStates } | undefined
  navPrimaryText: string
  gray1: string
  primary: string
  secondary: string
  pink1: string
  gray2: string
  darkGray: string
  primaryButton: string
  white: string
  purple: string
  darkestGray: string
  pink2: string
  purple1: string
  purple2: string
  gray3: string
  fadedWhite: string
  dimPink: string
  pink3: string
  blackFaded: string
  secondaryButton: string
  halfWhite: string
  pink4: string
  black: string
  blackSuperFaded: string
}

export const basicTheme: Theme = {
  navPrimaryText: colors.white1,
  gray1: colors.gray1,
  secondary: colors.darkBlue,
  primary: colors.brightGreen,
  darkGray: colors.darkGray,
  primaryButton: colors.pink,
  white: colors.white,
  black: colors.black,
  purple: colors.purple,
  darkestGray: colors.darkestGray,
  pink1: colors.pink1,
  purple1: colors.purple1,
  gray2: colors.gray2,
  pink2: colors.pink2,
  purple2: colors.purple2,
  gray3: colors.gray3,
  pink3: colors.pink3,
  fadedWhite: colors.fadedWhite,
  dimPink: colors.dimPink,
  blackFaded: colors.blackFaded,
  secondaryButton: colors.darkBlue1,
  halfWhite: colors.halfWhite,
  pink4: colors.pink4,
  blackSuperFaded: colors.blackSuperFaded,
}

export const lightTheme: Theme = {
  navPrimaryText: colors.white1,
  gray1: colors.gray1,
  primary: colors.brightGreen,
  secondary: colors.darkBlue,
  pink1: colors.pink1,
  gray2: colors.gray2,
  pink2: colors.pink2,
  darkGray: colors.darkGray,
  primaryButton: colors.pink,
  white: colors.white,
  black: colors.black,
  purple: colors.purple,
  darkestGray: colors.darkestGray,
  purple1: colors.purple1,
  purple2: colors.purple2,
  gray3: colors.gray3,
  fadedWhite: colors.fadedWhite,
  dimPink: colors.dimPink,
  pink3: colors.pink3,
  blackFaded: colors.blackFaded,
  secondaryButton: colors.darkBlue1,
  halfWhite: colors.halfWhite,
  pink4: colors.pink4,
  blackSuperFaded: colors.blackSuperFaded,
}

export enum Themes {
  BASIC,
  LIGHT,
}

export const getTheme = (theme: Themes) => {
  switch (theme) {
    case Themes.BASIC:
      return basicTheme
    case Themes.LIGHT:
      return lightTheme
    default:
      return basicTheme
  }
}
