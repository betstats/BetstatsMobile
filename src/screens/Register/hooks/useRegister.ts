import { useEffect, useState } from 'react';
import { RegisterScreenProps } from '..';
import { useForm } from 'react-hook-form';
import { RegisterFormType, RegisterScheme } from '../scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { Keyboard } from 'react-native';
import { useMutation } from '@tanstack/react-query';
import { useAuthService } from '../../../service/auth';
import { useToast } from '../../../context/Snackbar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authToken } from '../../../configs/tokens';
import { TabsNavigatorScreenName } from '../../../navigator/TabsNavigator';
import { AxiosError } from 'axios';

export const useRegister = (props: RegisterScreenProps) => {
  const { navigation } = props;

  const { mutateAsync: createUser, isPending } = useMutation({
    mutationFn: useAuthService().register,
  });

  const { toast } = useToast();

  const { formState, handleSubmit, register, setValue } = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterScheme),
  });

  const { errors } = formState;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  const onSubmit = handleSubmit(async (data) => {
    Keyboard.dismiss();
    await createUser(
      {
        confirm_password: data.confirmPassword,
        email: data.email,
        name: data.name,
        password: data.password,
      },
      {
        onSuccess: async (res) => {
          toast.success('Usuário criado com sucesso!');
          await AsyncStorage.setItem(authToken, res.data.token);
          navigation.navigate(TabsNavigatorScreenName);
        },
        onError: (err: any) => {
          if (err.response.data.message.includes('userAlreadyExists')) {
            toast.error('Usuário já existe.');
            return;
          }
          toast.error('Erro de servidor, contate o suporte.');
        },
      },
    );
  });

  useEffect(() => {
    register('confirmPassword');
    register('password');
    register('email');
    register('name');
  }, []);

  return {
    errors,
    onSubmit,
    setValue,
    isPending,
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
  };
};
