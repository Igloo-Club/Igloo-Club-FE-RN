import {
  IcChatActive,
  IcChatInActive,
  IcHeartActive,
  IcHeartInActive,
  IcHomeActive,
  IcHomeInActive,
  IcPeopleActive,
  IcPeopleInActive,
} from '../assets/0_index';

type IconType = React.ReactNode;

// BOTTOM_NAV_ICON 객체 정의
interface BottomNavIcon {
  [key: string]: {
    activeIcon: IconType;
    inActiveIcon: IconType;
    label: string;
  };
}

// 객체 정의
export const BOTTOM_NAV_ICON: BottomNavIcon = {
  MainPage: {
    activeIcon: IcHomeActive,
    inActiveIcon: IcHomeInActive,
    label: '홈',
  },
  Chat: {
    activeIcon: IcChatActive,
    inActiveIcon: IcChatInActive,
    label: '채팅',
  },
  matching: {
    activeIcon: IcHeartActive,
    inActiveIcon: IcHeartInActive,
    label: '매칭',
  },
  myPage: {
    activeIcon: IcPeopleActive,
    inActiveIcon: IcPeopleInActive,
    label: '마이',
  },
};
