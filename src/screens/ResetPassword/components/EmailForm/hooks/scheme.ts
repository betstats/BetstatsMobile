import { z } from 'zod';
import { requiredFieldMessage } from '../../../../../utils/messages';

export const EmailFormScheme = z.object({
  email: z.string({ required_error: requiredFieldMessage }).email('Email inválido'),
});

export type EmailFormType = z.infer<typeof EmailFormScheme>;
