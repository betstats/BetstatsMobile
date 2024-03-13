import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigator/StackNavigator/types';
import { useLogin } from './hooks/useLogin';
import { SvgXml } from 'react-native-svg';
import { UserIconSvg } from '../../../assets/icons/user';
import { PasswordIcon } from '../../../assets/icons/password';
import { OpenEye } from '../../../assets/icons/eyeOpen';
import { CloseEye } from '../../../assets/icons/eyeClose';
import { RegisterScreenName } from '../Register';
import { ResetPasswordScreenName } from '../ResetPassword';

export const LoginScreenName = 'Login';
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login = (props: LoginScreenProps) => {
  const { onSubmit, isPending, errors, setValue, showPassword, toggleShowPassword } =
    useLogin(props);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
        <View className="flex-1 flex-col items-center pt-8 pb-16 px-4">
          <Image
            className="w-[120px] h-[23px] mb-4"
            source={require('../../../assets/images/Logo.png')}
          />

          <View className="mb-8 w-full bg-light-weakCross rounded-md flex justify-center items-center py-4">
            <Text>
              Nao possui conta Betstats?{' '}
              <Text
                onPress={() => {
                  props.navigation.navigate(RegisterScreenName);
                }}
                className="font-bold text-primary-brand"
              >
                Crie uma
              </Text>
            </Text>
          </View>

          <Text className="font-bold text-lg mb-4">Bem vindo de volta ao jogo!</Text>
          <Input
            keyboardType="email-address"
            startIcon={<SvgXml xml={UserIconSvg} width="20" height="20" />}
            onChangeText={(value) => setValue('email', value)}
            returnKeyType="next"
            placeholder="Email"
            error={errors.email?.message}
            autoFocus
          />
          <Input
            onChangeText={(value) => setValue('password', value)}
            startIcon={<SvgXml xml={PasswordIcon} width="20" height="20" />}
            placeholder="Senha"
            className="mt-4"
            returnKeyType="done"
            error={errors.password?.message}
            secureTextEntry={!showPassword}
            endIcon={
              <Pressable onPress={toggleShowPassword}>
                <SvgXml xml={showPassword ? CloseEye : OpenEye} width="20" height="20" />
              </Pressable>
            }
          />
          <View className="flex-1 justify-end items-center w-full">
            <Button isLoading={isPending} className="w-full" mt={16} onPress={onSubmit}>
              <Text className="font-bold text-light-textCross text-lg">Login</Text>
            </Button>
            <Text
              onPress={() => props.navigation.navigate(ResetPasswordScreenName)}
              className="mt-8 font-bold text-primary-brand"
            >
              Esqueceu sua senha?
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
