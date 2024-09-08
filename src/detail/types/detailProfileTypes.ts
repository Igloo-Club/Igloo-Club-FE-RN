export interface DetailProfileTypes {
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
  hobbyList: {
    category: string;
    name: string;
  }[];
  intro: string;
}
