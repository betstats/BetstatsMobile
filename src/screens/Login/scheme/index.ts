import { z } from 'zod';
import { requiredFieldMessage } from '../../../utils/messages';

// A senha deve conter pelo menos uma letra maiúscula.
// A senha deve conter pelo menos uma letra minúscula.
// A senha deve conter pelo menos um dígito (0-9).
// A senha deve conter pelo menos um caractere especial entre @, $, !, %, *, ? ou &.
// A senha deve ter um comprimento mínimo de 8 caracteres.
export const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const LoginScheme = z.object({
  email: z
    .string({
      required_error: requiredFieldMessage,
    })
    .min(1, requiredFieldMessage)
    .email('Email inválido.'),
  password: z.string({ required_error: requiredFieldMessage }).min(1),
});

export type LoginFormType = z.infer<typeof LoginScheme>;
