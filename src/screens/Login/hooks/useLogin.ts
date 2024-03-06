import { useMutation } from '@tanstack/react-query';
import { useAuthService } from '../../../service/auth';
import { LoginFormType, LoginScheme } from '../scheme';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { LoginScreenProps } from '..';
import { useToast } from '../../../context/Snackbar';
import { authToken } from '../../../configs/tokens';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TabsNavigatorScreenName } from '../../../navigator/TabsNavigator';

export const useLogin = ({ navigation }: LoginScreenProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const { mutateAsync: loginRequest, isPending } = useMutation({
    mutationFn: useAuthService().login,
  });
  const { toast } = useToast();
  const { formState, handleSubmit, register, setValue } = useForm<LoginFormType>({
    resolver: zodResolver(LoginScheme),
  });

  const errors = formState.errors;

  const onSubmit = handleSubmit(async (data) => {
    Keyboard.dismiss();
    await loginRequest(data, {
      onSuccess: async (res) => {
        await AsyncStorage.setItem(authToken, res.data.token);
        const token = await AsyncStorage.getItem(authToken);
        console.log(token);
        navigation.navigate(TabsNavigatorScreenName);
      },
      onError: (err: any) => {
        toast.error(err.response.data.message);
      },
    });
  });

  useEffect(() => {
    register('email');
    register('password');
  }, []);

  return {
    errors,
    showPassword,
    isPending,
    onSubmit,
    setValue,
    toggleShowPassword,
  };
};
