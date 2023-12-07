import { api } from '..';
import { urls } from '../urls';
import { GoogleLoginPayload, GoogleLoginResponse } from './@types/googleLogin';
import { LoginPayload, LoginResponse } from './@types/login';
import { PasswordRecoveryPayload, UpdatePasswordPayload } from './@types/passwordRecovery';
import { RegisterPayload, RegisterResponse } from './@types/register';

export const useAuthService = () => {
  const register = (payload: RegisterPayload) => {
    return api.post<RegisterResponse>(urls.auth.register, payload);
  };

  const passwordRecovery = (payload: PasswordRecoveryPayload) => {
    return api.post(urls.auth.passwordRecovery, payload);
  };

  const updatePassword = (payload: UpdatePasswordPayload) => {
    return api.post(urls.auth.updatePassword, payload);
  };

  const login = (payload: LoginPayload) => {
    return api.post<LoginResponse>(urls.auth.login, payload);
  };

  const googleLogin = (payload: GoogleLoginPayload) =>
    api.post<GoogleLoginResponse>(urls.auth.googleLogin, payload);

  return { register, login, googleLogin, passwordRecovery, updatePassword };
};
