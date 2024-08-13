interface DetailProfileViewConstant {
  mainTitle: string;
}

export const DETAIL_PROFILE_VIEW_CONSTATNS: DetailProfileViewConstant[] = [
  {
    mainTitle: '상세 프로필을 완성해봐요!\n키가 어떻게 되세요?',
  },
  {
    mainTitle: '종교가 있으신가요?',
  },
  {
    mainTitle: '문신이 있으신가요?',
  },
  {
    mainTitle: '흡연을 하고 계신가요?',
  },
  {
    mainTitle: '결혼 생각이 있으신가요?\n있다면, 언제 하고 싶으신가요?',
  },
  {
    mainTitle: '회원님의 MBTI가 궁금해요.',
  },
  {
    mainTitle: '조심스러운 질문이지만..\n세전 연봉이 어떻게 되시나요?',
  },
  {
    mainTitle: '근무 형태가 어떻게 되세요?',
  },
  {
    mainTitle: '재직 중이신 회사의 규모가\n어느정도 되나요?',
  },
  {
    mainTitle: '회원님이 평소 즐겨하시는\n취미를 골라주세요.',
  },
  {
    mainTitle: '거의 다 완성했어요!\n짧은 한줄 소개를 적어주세요.',
  },
  {
    mainTitle: '마지막이에요!\n자세한 자기소개를 적어주세요.',
  },
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
