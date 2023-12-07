export type RegisterResponse = {
  token: string;
};

export type RegisterPayload = {
  email: string;
  password: string;
  confirm_password: string;
  name: string;
};
