export const MOCK_MEMBER = {
  birthdate: '20020506',
  grossSalary: 20,
  height: 163,
  hobbyList: [{category: 'GAME', name: 'BOARD'}],
  imageUrlList: [
    'https://nungil-s3bucket.s3.ap-northeast-2.amazonaws.com/835ebc6b-57cd-4759-aeef-28804ca87eeb.png?response-content-disposition=inline&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250210T092914Z&X-Amz-SignedHeaders=host&X-Amz-Expires=119&X-Amz-Credential=AKIAXYKJRCOQ2QJ3DRX6%2F20250210%2Fap-northeast-2%2Fs3%2Faws4_request&X-Amz-Signature=6932834a6516a6f77be54abfa418fc163277146169a7b58ddd3a567730179d4d',
  ],
  email: 'sooy@soongsil.ac.kr',
  intro: '하욤',
  job: '인플루언서',
  marriagePlan: 7,
  mbti: null,
  nickname: '뚜얀',
  religion: 'NONE',
  scale: 'STARTUP',
  sex: 'FEMALE',
  smoke: false,
  tattoo: false,
  workArrangementList: ['NONE'],
};

export type memberType = typeof MOCK_MEMBER;
