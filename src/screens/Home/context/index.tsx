import React, { createContext, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

type ProviderProps = {
  children: React.ReactNode;
  defaultDate?: string;
};

type ContextProps = {
  date: Date;
  onChangeDate: (value: Date) => void;
};

const DashboardContext = createContext<ContextProps>({
  date: new Date(),
  onChangeDate: () => {},
});

export const DashboardProvider: React.FC<ProviderProps> = ({
  children,
  defaultDate,
}: ProviderProps) => {
  const navigation = useNavigation();

  const [date, setDate] = useState<Date>(
    new Date(defaultDate || new Date().toISOString())
  );

  const onChangeDate = (value: Date) => {
   
    setDate(value);
  };

  return (
    <DashboardContext.Provider
      value={{
        date: date || new Date(),
        onChangeDate,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = (): ContextProps => useContext(DashboardContext);
