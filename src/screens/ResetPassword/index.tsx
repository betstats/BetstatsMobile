import { ResetPasswordProvider } from './context';
import { ResetPasswordLayout } from './layout';

export const ResetPasswordScreenName = 'ResetPassword';
export const ResetPassword = () => {
  return (
    <ResetPasswordProvider>
      <ResetPasswordLayout />
    </ResetPasswordProvider>
  );
};
