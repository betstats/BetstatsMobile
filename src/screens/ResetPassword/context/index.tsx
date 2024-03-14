import { createContext, useContext, useState } from 'react';
import { FORM_STEPS } from '../types';

type ContextProps = {
  actualStep: FORM_STEPS;
  setActualStep: React.Dispatch<React.SetStateAction<FORM_STEPS>>;
};

const ResetPasswordContext = createContext<ContextProps>({} as ContextProps);

export const ResetPasswordProvider = ({ children }: { children: React.ReactNode }) => {
  const [actualStep, setActualStep] = useState<FORM_STEPS>(FORM_STEPS.EMAIL);

  return (
    <ResetPasswordContext.Provider
      value={{
        actualStep,
        setActualStep,
      }}
    >
      {children}
    </ResetPasswordContext.Provider>
  );
};

export const useResetPasswordContext = () => useContext(ResetPasswordContext);
