export type PasswordRecoveryPayload = {
  email: string;
};

export type UpdatePasswordPayload = {
  password: string;
  confirm_password: string;
  token: string;
};
