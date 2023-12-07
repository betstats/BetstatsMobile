import { useState } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { twMerge } from 'tailwind-merge';
import colors from '../../theme/colors';

interface InputProps extends TextInputProps {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  className?: string;
  error?: string;
}

export const Input = ({ startIcon, endIcon, className, error, ...rest }: InputProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const toggleFocus = () => setFocused((state) => !state);

  return (
    <View className="w-full">
      <View
        className={twMerge(
          'w-full flex-row border border-light-strongCross px-3 rounded-md items-center',
          `${focused ? 'border-primary-brand' : ''}`,
          className,
        )}
      >
        {startIcon && startIcon}
        <TextInput
          placeholderTextColor={colors.light.textDisabled}
          onFocus={toggleFocus}
          onBlur={toggleFocus}
          {...rest}
          className="flex-1 ml-2 mr-2 py-5"
        />
        {endIcon && endIcon}
      </View>
      {error && <Text className="text-alerts-red text-sm mt-1">{error}</Text>}
    </View>
  );
};
