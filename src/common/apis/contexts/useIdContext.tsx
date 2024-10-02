import React, {createContext, useContext, useState} from 'react';

interface IdContextType {
  exposureNumber: number;
  setExposureNumber: (exposureNumber: number) => void;
  qaId: number;
  setQaId: (qaId: number) => void;
}

const IdContext = createContext<IdContextType>({
  exposureNumber: 0,
  setExposureNumber: () => {},
  qaId: 0,
  setQaId: () => {},
});

export const IdProvider: React.FC = ({children}: any) => {
  const [exposureNumber, setExposureNumber] = useState<number>(0);
  const [qaId, setQaId] = useState<number>(0);

  return (
    <IdContext.Provider
      value={{exposureNumber, setExposureNumber, qaId, setQaId}}>
      {children}
    </IdContext.Provider>
  );
};

export const useIdContext = () => {
  const context = useContext(IdContext);
  if (context === undefined) {
    throw new Error('useIdContext 에러');
  }
  return context;
};
