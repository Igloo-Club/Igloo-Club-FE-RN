import React, {createContext, useContext, useState} from 'react';

const IdContext = createContext<any>(null);

export const IdProvider = ({children}: any) => {
  const [exposureNumber, setExposureNumber] = useState<number | null>(null);
  const [qaId, setQaId] = useState<number | null>(null);

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
