import {Theme} from '@emotion/react';

const colors = {
  primary: '#FA7268',
  pressed_primary: '#D75F56',
  alpha10_primary: 'rgba(250, 114, 104, 0.10)',
  alpha20_primary: 'rgba(250, 114, 104, 0.20)',
  warning_red: '#F53E50',
  white: '#FFFFFF',
  gray0: '#F8F8F8',
  gray1: '#EFEFEF',
  gray2: '#E8E8E8',
  gray3: '#E0E0E0',
  gray4: '#D0D0D0',
  gray5: '#B0B0B0',
  gray6: '#909090',
  gray7: '#707070',
  gray8: '#505050',
  gray9: '#303030',
  black: '#202020',
  add_gray1: '#D0D6DE',
  add_gray2: '#9FA4B0',
  add_gray3: '#E4E8EC',
};

type Font = {
  family: string;
  size: number;
  style: string;
  weight: number;
  lineheight: string;
};

const FONT = ({family, size, style, weight, lineheight}: Font): string => `
  font-family: ${family};
  font-size: ${size}px;
  font-style: ${style};
  font-weight: ${weight};
  line-height: ${lineheight};
  letter-spacing: -0.03rem;
`;

const fonts = {
  title: FONT({
    family: 'Pretendard Variable',
    size: 22,
    style: 'normal',
    weight: 700,
    lineheight: 'normal',
  }),
  subtitle1: FONT({
    family: 'Pretendard Variable',
    size: 22,
    style: 'normal',
    weight: 500,
    lineheight: 'normal',
  }),
  subtitle2b: FONT({
    family: 'Pretendard Variable',
    size: 20,
    style: 'normal',
    weight: 700,
    lineheight: 'normal',
  }),
  subtitle2m: FONT({
    family: 'Pretendard Variable',
    size: 20,
    style: 'normal',
    weight: 400,
    lineheight: 'normal',
  }),
  subtitle3: FONT({
    family: 'Pretendard Variable',
    size: 16,
    style: 'normal',
    weight: 600,
    lineheight: 'normal',
  }),
  body1: FONT({
    family: 'Pretendard Variable',
    size: 15,
    style: 'normal',
    weight: 700,
    lineheight: 'normal',
  }),
  body1b: FONT({
    family: 'Pretendard Variable',
    size: 15,
    style: 'normal',
    weight: 600,
    lineheight: 'normal',
  }),
  body1m: FONT({
    family: 'Pretendard Variable',
    size: 15,
    style: 'normal',
    weight: 500,
    lineheight: 'normal',
  }),
  body1r: FONT({
    family: 'Pretendard Variable',
    size: 15,
    style: 'normal',
    weight: 400,
    lineheight: 'normal',
  }),
  body2b: FONT({
    family: 'Pretendard Variable',
    size: 14,
    style: 'normal',
    weight: 600,
    lineheight: 'normal',
  }),
  body2m: FONT({
    family: 'Pretendard Variable',
    size: 14,
    style: 'normal',
    weight: 500,
    lineheight: 'normal',
  }),
  body2r: FONT({
    family: 'Pretendard Variable',
    size: 14,
    style: 'normal',
    weight: 400,
    lineheight: 'normal',
  }),
  body3m: FONT({
    family: 'Pretendard Variable',
    size: 13,
    style: 'normal',
    weight: 400,
    lineheight: 'normal',
  }),
  body3: FONT({
    family: 'Pretendard Variable',
    size: 12,
    style: 'normal',
    weight: 400,
    lineheight: 'normal',
  }),
  button1b: FONT({
    family: 'Pretendard Variable',
    size: 15,
    style: 'normal',
    weight: 700,
    lineheight: 'normal',
  }),
  button2m: FONT({
    family: 'Pretendard Variable',
    size: 14,
    style: 'normal',
    weight: 400,
    lineheight: 'normal',
  }),
  caption: FONT({
    family: 'Pretendard Variable',
    size: 12,
    style: 'normal',
    weight: 300,
    lineheight: 'normal',
  }),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: Theme = {
  colors,
  fonts,
};
