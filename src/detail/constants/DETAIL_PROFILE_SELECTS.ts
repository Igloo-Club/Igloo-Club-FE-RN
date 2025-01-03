export const RELIGION = [
  {value: 'BUDDHISM', label: '불교'},
  {value: 'CHRISTIANITY', label: '기독교'},
  {value: 'CATHOLICISM', label: '천주교'},
  {value: 'ISLAM', label: '이슬람교'},
  {value: 'OTHER', label: '기타'},
  {value: 'NONE', label: '무교'},
];

export const MARRIAGE_PLAN = [
  {value: 0, label: '미정'},
  {value: 3, label: '3년 이내'},
  {value: 5, label: '5년 이내'},
  {value: 7, label: '7년 이내'},
];

export const GROSS_SALARY = [
  {value: 4, label: '4000만 이하'},
  {value: 5, label: '4~5000만원'},
  {value: 6, label: '5~6000만원'},
  {value: 8, label: '6~8000만원'},
  {value: 10, label: '8000~1억'},
  {value: 20, label: '1억 이상'},
];

export const WORK_ARRANGEMENT = [
  {value: 'ROTATIONAL', label: '순환근무'},
  {value: 'SHIFT', label: '교대근무'},
  {value: 'NONE', label: '해당 사항 없어요'},
];

export const SCALE = [
  {value: 'LARGE', label: '대기업'},
  {value: 'MID', label: '중견기업'},
  {value: 'SMALL', label: '중소기업'},
  {value: 'STARTUP', label: '스타트업'},
];

export const SMOKE = [
  {value: 'true', label: '핀다'},
  {value: 'false', label: '안 핀다'},
];

export const TATTOO = [
  {value: 'true', label: '있다'},
  {value: 'false', label: '없다'},
];

export const HOBBY = [
  {
    value: 'TRIP',
    label: '✈️ 여행',
    subCategories: [
      {value: 'LOCAL', label: '국내'},
      {value: 'ABROAD', label: '해외'},
    ],
  },
  {
    value: 'READING',
    label: '📚 독서',
    subCategories: [
      {value: 'HUMANITT', label: '인문학'},
      {value: 'PHILOSOPHY', label: '철학'},
      {value: 'ECONOMIC', label: '경제'},
      {value: 'HISTORY', label: '역사'},
    ],
  },
  {
    value: 'MOVIE',
    label: '🎬 영화',
    subCategories: [
      {value: 'HORROR', label: '공포'},
      {value: 'ROMANCE', label: '멜로'},
      {value: 'ACTION', label: '액션'},
      {value: 'NOIR', label: '느와르'},
      {value: 'COMEDY', label: '코믹'},
    ],
  },
  {
    value: 'MUSIC',
    label: '🎵 음악',
    subCategories: [
      {value: 'IDOL', label: '아이돌'},
      {value: 'INDIE', label: '인디'},
      {value: 'HIPHOP', label: '힙합'},
      {value: 'BAND', label: '밴드'},
      {value: 'BALLAD', label: '발라드'},
    ],
  },
  {
    value: 'COOKING',
    label: '🍳 요리',
    subCategories: [
      {value: 'MEALS', label: '식사'},
      {value: 'BAKING', label: '베이킹'},
      {value: 'COFFEE', label: '커피'},
      {value: 'COCKTAILS', label: '칵테일'},
    ],
  },
  {value: 'PET', label: '🐕 반려동물', subCategories: []},
  {
    value: 'PHOTOGRAPHY',
    label: '📷 사진',
    subCategories: [
      {value: 'PORTRAIT', label: '인물사진'},
      {value: 'LANDSCAPE', label: '풍경사진'},
    ],
  },
  {
    value: 'EXERCISE',
    label: '💪🏻 운동',
    subCategories: [
      {value: 'SPORTS', label: '스포츠'},
      {value: 'FITNESS', label: '헬스/크로스핏'},
      {value: 'PILATES', label: '필라테스/요가'},
      {value: 'MARTIAL_ART', label: '무술'},
      {value: 'SWIMMING', label: '수영'},
    ],
  },
  {
    value: 'GAME',
    label: '🎮 게임',
    subCategories: [
      {value: 'BOARD', label: '보드게임'},
      {value: 'ONLINE', label: '온라인 게임'},
    ],
  },
];

export type MBTIGroup = 'ei' | 'sn' | 'tf' | 'jp';

export const GROUP_OPTIONS: Record<
  MBTIGroup,
  {label: string; value: string | number}[]
> = {
  ei: ['E', 'I'].map(value => ({label: value, value})),
  sn: ['S', 'N'].map(value => ({label: value, value})),
  tf: ['T', 'F'].map(value => ({label: value, value})),
  jp: ['J', 'P'].map(value => ({label: value, value})),
};

export const GROUP_LABELS: Record<MBTIGroup, string> = {
  ei: '외향형/내향형',
  sn: '감각형/직관형',
  tf: '사고형/감정형',
  jp: '판단형/인식형',
};
