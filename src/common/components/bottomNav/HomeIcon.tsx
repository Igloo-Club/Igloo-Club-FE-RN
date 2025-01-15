import React from 'react';
import {Text, View} from 'react-native';
import styled from '@emotion/native';
import {BOTTOM_NAV_ICON} from '../../constants/BOTTOM_NAV_ICON';

const HomeIcon = ({name, focused}: {name: string; focused: boolean}) => {
  return (
    <NavButton>
      {focused
        ? BOTTOM_NAV_ICON[name].activeIcon
        : BOTTOM_NAV_ICON[name].inActiveIcon}
      <BtnText active={focused}>{BOTTOM_NAV_ICON[name].label}</BtnText>
    </NavButton>
  );
};

export default HomeIcon;

const NavButton = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const BtnText = styled(Text)<{active: boolean}>`
  font-size: 11px;
  font-weight: 700;
  color: ${({active}) => (active ? '#FA7268' : '#e4e8ec')};
`;
