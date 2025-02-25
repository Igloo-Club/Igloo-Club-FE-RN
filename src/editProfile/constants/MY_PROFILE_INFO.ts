export const MY_PROFILE_INFO = [
  {label: '재직 중인 회사', key: 'job', unit: ''},
  {label: '키', key: 'height', unit: 'cm'},
  {label: '종교', key: 'religion', unit: ''},
  {label: '문신 유무', key: 'tattoo', unit: ''},
  {label: '흡연 유무', key: 'smoke', unit: ''},
  {label: '결혼 계획', key: 'marriagePlan', unit: '년'},
  {label: 'MBTI', key: 'mbti', unit: ''},
  {label: '재직 중인 회사 규모', key: 'scale', unit: ''},
  {label: '취미', key: 'hobbyList', unit: ''},
];

export type ProfileLabel = (typeof MY_PROFILE_INFO)[number]['label'];
export type ProfileKey = (typeof MY_PROFILE_INFO)[number]['key'];

export const findProfileInfoByLabel = (label: ProfileLabel) =>
  MY_PROFILE_INFO.find(item => item.label === label);
