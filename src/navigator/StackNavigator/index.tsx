import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, LoginScreenName } from '../../screens/Login';
import { StartScreenName, Start } from '../../screens/Start';
import { RootStackParamList } from './types';
import colors from '../../theme/colors';
import { TabsNavigator, TabsNavigatorScreenName } from '../TabsNavigator';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={StartScreenName}>
        <Stack.Screen
          component={Start}
          name={StartScreenName}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: colors.light.bgCross,
            },
            headerTintColor: colors.light.textCross,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'left',
          }}
          name={LoginScreenName}
          component={Login}
        />
        <Stack.Screen
          component={TabsNavigator}
          name={TabsNavigatorScreenName}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
