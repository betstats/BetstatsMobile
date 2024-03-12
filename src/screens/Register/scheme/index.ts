import { z } from 'zod';
import { requiredFieldMessage } from '../../../utils/messages';
import { passwordRegex } from '../../Login/scheme';

export const RegisterScheme = z
  .object({
    name: z.string({ required_error: requiredFieldMessage }).min(1),
    email: z
      .string({
        required_error: requiredFieldMessage,
      })
      .min(1, requiredFieldMessage)
      .email('Email inválido.'),
    password: z.string({ required_error: requiredFieldMessage }).refine(
      (value) => {
        return passwordRegex.test(value);
      },
      {
        message:
          'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um dígito (0-9) e um caractere especial entre @, $, !, %, *, ? ou &. A senha deve ter um comprimento mínimo de 8 caracteres.',
      },
    ),
    confirmPassword: z.string({ required_error: requiredFieldMessage }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: 'As senhas não coincidem.',
      path: ['confirmPassword'],
    },
  );

export type RegisterFormType = z.infer<typeof RegisterScheme>;
