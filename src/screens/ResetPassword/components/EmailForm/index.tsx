import { Text, View } from 'react-native';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { SvgXml } from 'react-native-svg';
import { UserIconSvg } from '../../../../../assets/icons/user';

export const EmailForm = () => {
  return (
    <View className="w-full flex-1">
      <Text className="font-bold text-lg mb-4 text-center">Digite seu email</Text>

      <Input
        keyboardType="email-address"
        startIcon={<SvgXml xml={UserIconSvg} width="20" height="20" />}
        placeholder="Email"
      />
      <View className="flex-1 justify-end items-center w-full">
        <Button className="w-full" mt={16}>
          <Text className="font-bold text-light-textCross text-lg">Enviar verificação</Text>
        </Button>
      </View>
    </View>
  );
};
