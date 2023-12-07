import { ReactNode } from 'react';
import { ActivityIndicator, GestureResponderEvent, TouchableOpacity } from 'react-native';
import { twMerge } from 'tailwind-merge';
import colors from '../../theme/colors';

type Scheme = 'primary' | 'white' | 'black';

interface Props {
  children: ReactNode;
  isOutlined?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  mb?: number;
  mt?: number;
  className?: string;
  scheme?: Scheme;
  isLoading?: boolean;
}

export const Button = ({
  children,
  isOutlined,
  onPress,
  mb,
  mt,
  className,
  scheme = 'primary',
  isLoading,
}: Props) => {
  const colorMap = {
    primary: isOutlined
      ? 'bg-transparent border border-primary-brand text-primary-brand'
      : 'bg-primary-brand text-light-textCross',
    white: isOutlined ? 'bg-transparent border border-white text-white' : 'bg-white text-black',
    black: isOutlined ? 'bg-transparent border border-black text-black' : 'bg-light-bgCross text-white',
  };

  return (
    <TouchableOpacity
      className={twMerge(
        `px-4 py-3 flex-row rounded-full justify-center items-center ${colorMap[scheme]}`,
        className,
      )}
      activeOpacity={0.7}
      style={{
        marginBottom: mb,
        marginTop: mt,
      }}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator
          size={32}
          color={scheme === 'primary' ? colors.light.textCross : colors.primary.brand}
        />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};
