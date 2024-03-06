import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BallIcon } from '../../../../../assets/icons/ball';
import colors from '../../../../theme/colors';
import { twMerge } from 'tailwind-merge';
import { HomeScreenName } from '../../../../screens/Home';

export const TabBar = ({ descriptors, insets, navigation, state }: BottomTabBarProps) => {
  const getIcon = (label: string, isFocused: boolean) => {
    if (label === HomeScreenName) {
      return (
        <SvgXml
          xml={BallIcon({ color: isFocused ? colors.primary.brand : colors.light.textCross })}
          width="24"
          height="24"
        />
      );
    }

    return (
      <SvgXml
        xml={BallIcon({ color: isFocused ? colors.primary.brand : colors.light.textCross })}
        width="24"
        height="24"
      />
    );
  };

  return (
    <View className="flex flex-row justify-center items-center">
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            className={'flex-1 flex flex-col items-center justify-center p-4 bg-light-strongCross'}
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {getIcon(label as string, isFocused)}
            <Text
              className="mt-1 font-bold"
              style={{ color: isFocused ? colors.primary.brand : colors.light.textCross }}
            >
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
