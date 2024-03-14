import { useForm } from 'react-hook-form';
import { EmailFormScheme, EmailFormType } from './scheme';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useResetPasswordContext } from '../../../context';
import { useMutation } from '@tanstack/react-query';
import { useAuthService } from '../../../../../service/auth';
import { FORM_STEPS } from '../../../types';
import { useToast } from '../../../../../context/Snackbar';

export const useEmailForm = () => {
  const { setActualStep } = useResetPasswordContext();
  const { toast } = useToast();
  const { handleSubmit, formState, register, setValue } = useForm<EmailFormType>({
    resolver: zodResolver(EmailFormScheme),
  });
  const { mutateAsync: sendEmail, isPending } = useMutation({
    mutationFn: useAuthService().passwordRecovery,
  });

  const { errors } = formState;

  useEffect(() => {
    register('email');
  }, []);

  const onSubmit = handleSubmit((data) => {
    sendEmail(data, {
      onSuccess: () => {
        toast.success('Email enviado. Verifique sua caixa de entrada.');
        setActualStep(FORM_STEPS.CONFIRMATION);
      },
    });
  });

  return {
    setValue,
    onSubmit,
    errors,
    isPending,
  };
};
