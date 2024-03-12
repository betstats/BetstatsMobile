import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/StackNavigator/types';
import { Image, Keyboard, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import { LoginScreenName } from '../Login';
import { Input } from '../../components/Input';
import { SvgXml } from 'react-native-svg';
import { UserIconSvg } from '../../../assets/icons/user';
import { PasswordIcon } from '../../../assets/icons/password';
import { Button } from '../../components/Button';
import { useRegister } from './hooks/useRegister';
import { CloseEye } from '../../../assets/icons/eyeClose';
import { OpenEye } from '../../../assets/icons/eyeOpen';

export const RegisterScreenName = 'Register';
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

export const Register = (props: RegisterScreenProps) => {
  const { navigation } = props;
  const {
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
    setValue,
    errors,
    onSubmit,
    isPending,
  } = useRegister(props);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
      <View className="flex-1 flex-col items-center py-8 px-4">
        <Image
          className="w-[120px] h-[23px] mb-4"
          source={require('../../../assets/images/Logo.png')}
        />
        <View className="mb-8 w-full bg-light-weakCross rounded-md flex justify-center items-center py-4">
          <Text>
            Já possui conta Betstats?{' '}
            <Text
              onPress={() => {
                navigation.navigate(LoginScreenName);
              }}
              className="font-bold text-primary-brand"
            >
              Faça login
            </Text>
          </Text>
        </View>
        <Text className="font-bold text-lg mb-4">Seja bem vindo ao time!</Text>
        <Input
          returnKeyType="next"
          startIcon={<SvgXml xml={UserIconSvg} width="20" height="20" />}
          placeholder="Nome"
          autoFocus
          onChangeText={(value) => setValue('name', value)}
          error={errors.name?.message}
        />
        <Input
          className="mt-4"
          keyboardType="email-address"
          returnKeyType="next"
          startIcon={<SvgXml xml={UserIconSvg} width="20" height="20" />}
          placeholder="Email"
          onChangeText={(value) => setValue('email', value)}
          error={errors.email?.message}
        />
        <Input
          startIcon={<SvgXml xml={PasswordIcon} width="20" height="20" />}
          placeholder="Senha"
          className="mt-4"
          returnKeyType="done"
          secureTextEntry={!showPassword}
          onChangeText={(value) => setValue('password', value)}
          error={errors.password?.message}
          endIcon={
            <Pressable onPress={toggleShowPassword}>
              <SvgXml xml={showPassword ? CloseEye : OpenEye} width="20" height="20" />
            </Pressable>
          }
        />
        <Input
          startIcon={<SvgXml xml={PasswordIcon} width="20" height="20" />}
          placeholder="Confirmar senha"
          className="mt-4"
          returnKeyType="done"
          secureTextEntry={!showConfirmPassword}
          onChangeText={(value) => setValue('confirmPassword', value)}
          error={errors.confirmPassword?.message}
          endIcon={
            <Pressable onPress={toggleShowConfirmPassword}>
              <SvgXml xml={showPassword ? CloseEye : OpenEye} width="20" height="20" />
            </Pressable>
          }
        />
        <Button isLoading={isPending} className="w-full" mt={16} onPress={onSubmit}>
          <Text className="font-bold text-light-textCross text-lg">Cadastrar</Text>
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};
