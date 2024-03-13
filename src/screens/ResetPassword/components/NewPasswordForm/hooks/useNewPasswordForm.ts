import { useState } from 'react';

export const useNewPasswordForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const toggleShowPassword = () => setShowPassword((state) => !state);
  const toggleShowConfirmPassword = () => setShowConfirmPassword((state) => !state);

  return {
    showPassword,
    showConfirmPassword,
    toggleShowPassword,
    toggleShowConfirmPassword,
  };
};
