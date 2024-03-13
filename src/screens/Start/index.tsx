import { Text, View } from 'react-native';
import { Button } from '../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/StackNavigator/types';
import { LoginScreenName } from '../Login';
import { SvgXml } from 'react-native-svg';
import { GoogleIcon } from '../../../assets/icons/google';
import { RegisterScreenName } from '../Register';
import { LogoSVG } from '../../../assets/brand/logo';

type Props = NativeStackScreenProps<RootStackParamList, 'Start'>;

export const StartScreenName = 'Start';

export const Start = ({ navigation }: Props) => {
  return (
    <View className="flex-1 flex-col justify-end items-center gap-10 py-16 px-10">
      <SvgXml xml={LogoSVG({ type: 'light' })} />
      <View className="w-full bg-light-weakCross rounded-md flex justify-center items-center py-4 px-2">
        <Text className="text-center">
          Veja estátisticas pré-match de qualquer partida de futebol do mundo.
        </Text>
      </View>
      <View className="w-full flex-col gap-4 items-center">
        <Button
          className="w-full rounded-full"
          onPress={() => navigation.navigate(LoginScreenName)}
        >
          <Text className="text-light-textCross font-bold text-lg">Login</Text>
        </Button>
        <Button isOutlined scheme="black" className="rounded-full w-full" mb={16} mt={16}>
          <SvgXml xml={GoogleIcon} width="20" height="20" />
          <Text className="font-bold text-lg ml-4 text-light-text">Sign in with Google</Text>
        </Button>
        <Button
          onPress={() => navigation.navigate(RegisterScreenName)}
          isOutlined
          className="rounded-full w-full"
        >
          <Text className="font-bold text-lg ml-4 text-primary-brand">Criar conta</Text>
        </Button>
      </View>
    </View>
  );
};
