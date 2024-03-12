import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../StackNavigator/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, HomeScreenName } from '../../screens/Home';
import { TabBar } from './components/TabBar';

const Tab = createBottomTabNavigator();

export const TabsNavigatorScreenName = 'TabsNavigator';
export type TabsNavigatorScreenProps = NativeStackScreenProps<RootStackParamList, 'TabsNavigator'>;

export const TabsNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name={HomeScreenName}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={HomeScreenName + '1'}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
