export interface DetailProfileDataTypesProps {
  nungilId: number;
  status: string;
  imageUrlList: string[];
  nickname: string;
  birthdate: string;
  intro: string;
  companyName: string;
  job: string;
  scale: string;
  locationList: string[];
  height: number;
  religion: string;
  tattoo: boolean;
  smoke: boolean;
  marriagePlan: number;
  mbtiType: string;
  hobbyNameList: string[];
  myAnsweredQa: number;
  questionAndAnswerList: {
    qaId: number;
    question: string;
    questionTitle: string;
    questionSubTitle: string | null;
    answer: string;
    exposureOrder: number;
  }[];
}
