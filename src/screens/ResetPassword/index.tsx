import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ResetPasswordProvider } from './context';
import { ResetPasswordLayout } from './layout';
import { RootStackParamList } from '../../navigator/StackNavigator/types';

export const ResetPasswordScreenName = 'ResetPassword';

export type ResetPasswordScreenProps = NativeStackScreenProps<RootStackParamList, 'ResetPassword'>;
export const ResetPassword = () => {
  return (
    <ResetPasswordProvider>
      <ResetPasswordLayout />
    </ResetPasswordProvider>
  );
};
