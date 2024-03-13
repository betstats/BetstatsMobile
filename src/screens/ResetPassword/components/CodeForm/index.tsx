import { Text, View } from 'react-native';
import { Input } from '../../../../components/Input';
import { SvgXml } from 'react-native-svg';
import { PasswordIcon } from '../../../../../assets/icons/password';
import { Button } from '../../../../components/Button';

export const CodeForm = () => {
  return (
    <View className="w-full flex-1">
      <Text className="font-bold text-lg mb-4 text-center">
        Digite o código de verificaçao enviado para seu email
      </Text>
      <Input
        keyboardType="default"
        startIcon={<SvgXml xml={PasswordIcon} width="20" height="20" />}
        placeholder="Código"
      />
      <View className="flex-1 justify-end items-center w-full">
        <Button className="w-full" mt={16}>
          <Text className="font-bold text-light-textCross text-lg">Verificar</Text>
        </Button>
      </View>
    </View>
  );
};
