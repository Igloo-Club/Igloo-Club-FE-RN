export interface IProfile {
  nickname: string;
  email: string;
  sex: 'FEMALE' | 'MALE';
  birthdate: string;
  height: number;
  religion: string;
  tattoo: boolean;
  smoke: boolean;
  marriagePlan: number;
  mbti: string;
  grossSalary: number;
  job: string;
  workArrangementList: string[];
  scale: string;
  hobbyList: IHobby[];
  intro: string;
  imageUrlList: string[];
}

interface IHobby {
  category: string;
  name: string;
}
