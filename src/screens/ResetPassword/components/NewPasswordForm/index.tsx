import { Pressable, Text, View } from 'react-native';
import { Input } from '../../../../components/Input';
import { SvgXml } from 'react-native-svg';
import { PasswordIcon } from '../../../../../assets/icons/password';
import { Button } from '../../../../components/Button';
import { CloseEye } from '../../../../../assets/icons/eyeClose';
import { OpenEye } from '../../../../../assets/icons/eyeOpen';
import { useNewPasswordForm } from './hooks/useNewPasswordForm';

export const NewPasswordForm = () => {
  const { showConfirmPassword, showPassword, toggleShowConfirmPassword, toggleShowPassword } =
    useNewPasswordForm();

  return (
    <View className="w-full flex-1">
      <Text className="font-bold text-lg mb-4 text-center">Crie sua nova senha</Text>
      <Input
        keyboardType="default"
        startIcon={<SvgXml xml={PasswordIcon} width="20" height="20" />}
        placeholder="Senha"
        secureTextEntry={!showPassword}
        endIcon={
          <Pressable onPress={toggleShowPassword}>
            <SvgXml xml={showPassword ? CloseEye : OpenEye} width="20" height="20" />
          </Pressable>
        }
      />
      <Input
        className="mt-4"
        keyboardType="default"
        startIcon={<SvgXml xml={PasswordIcon} width="20" height="20" />}
        placeholder="Confirmar senha"
        secureTextEntry={!showPassword}
        endIcon={
          <Pressable onPress={toggleShowConfirmPassword}>
            <SvgXml xml={showConfirmPassword ? CloseEye : OpenEye} width="20" height="20" />
          </Pressable>
        }
      />
      <View className="flex-1 justify-end items-center w-full">
        <Button className="w-full" mt={16}>
          <Text className="font-bold text-light-textCross text-lg">Verificar</Text>
        </Button>
      </View>
    </View>
  );
};
