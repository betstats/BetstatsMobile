import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, LoginScreenName } from '../../screens/Login';
import { StartScreenName, Start } from '../../screens/Start';
import { RootStackParamList } from './types';
import colors from '../../theme/colors';
import { TabsNavigator, TabsNavigatorScreenName } from '../TabsNavigator';
import { Register, RegisterScreenName } from '../../screens/Register';

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={StartScreenName}>
        <Stack.Screen
          component={Start}
          name={StartScreenName}
          options={{
            title: 'Início',
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
          name={RegisterScreenName}
          component={Register}
          options={{
            title: 'Registro',
            headerStyle: {
              backgroundColor: colors.light.bgCross,
            },
            headerTintColor: colors.light.textCross,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'left',
          }}
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
