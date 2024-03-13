import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { NewPasswordForm } from './components/NewPasswordForm';
import { EmailForm } from './components/EmailForm';
import { CodeForm } from './components/CodeForm';
import { FORM_STEPS } from './types';
import { useResetPasswordContext } from './context';

export const ResetPasswordLayout = () => {
  const { actualStep } = useResetPasswordContext();

  const FormSteps = {
    [FORM_STEPS.EMAIL]: <EmailForm />,
    [FORM_STEPS.CODE]: <CodeForm />,
    [FORM_STEPS.NEW_PASSWORD]: <NewPasswordForm />,
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 pb-20"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} className="flex-1">
        <View className="flex-1 flex-col items-center pt-8 px-4 pb-20">
          <Image
            className="w-[120px] h-[23px] mb-4"
            source={require('../../../assets/images/Logo.png')}
          />
          <View className="mb-8 w-full bg-light-weakCross rounded-md flex justify-center items-center py-4">
            <Text>Siga os passos para recuperar sua senha</Text>
          </View>
          {FormSteps[actualStep]}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
