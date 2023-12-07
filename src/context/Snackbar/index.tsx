import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type ContextProps = {
  toast: {
    error: (value: string) => void;
    success: (value: string) => void;
    warning: (value: string) => void;
  };
};

const SnackbarContext = createContext<ContextProps>({} as ContextProps);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [type, setType] = useState<'error' | 'success' | 'warning'>('error');

  const toast = {
    error: (value: string) => {
      setType('error');
      setMessage(value);
      setTimeout(() => {
        setVisible(true);
      }, 10);
    },
    success: (value: string) => {
      setType('success');
      setMessage(value);
      setTimeout(() => {
        setVisible(true);
      }, 10);
    },
    warning: (value: string) => {
      setType('warning');
      setMessage(value);
      setTimeout(() => {
        setVisible(true);
      }, 10);
    },
  };

  useEffect(() => {
    if (visible) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return (
    <SnackbarContext.Provider value={{ toast }}>
      {children}
      {visible && (
        <View
          className={twMerge(
            'absolute bottom-0 w-full min-h-[100px] px-4 py-5 items-center',
            `${type === 'error' ? 'bg-alerts-red' : ''}`,
            `${type === 'success' ? 'bg-alerts-green' : ''}`,
            `${type === 'warning' ? 'bg-alerts-orange' : ''}`,
          )}
        >
          <Text className="font-bold text-light-bg">{message}</Text>
        </View>
      )}
    </SnackbarContext.Provider>
  );
};

export const useToast = () => useContext(SnackbarContext);
