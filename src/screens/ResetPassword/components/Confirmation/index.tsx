import { Text, View } from 'react-native';
import { Button } from '../../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../navigator/StackNavigator/types';

export const Confirmation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'ResetPassword'>>();

  return (
    <View className="w-full flex-1">
      <Text className="font-bold text-lg mb-4 text-center">
        Siga os passos enviados para seu email para recuperar sua senha
      </Text>
      <View className="flex-1 justify-end items-center w-full">
        <Button className="w-full" mt={16} onPress={() => navigation.navigate('Login')}>
          <Text className="font-bold text-light-textCross text-lg">Ir para login</Text>
        </Button>
      </View>
    </View>
  );
};
