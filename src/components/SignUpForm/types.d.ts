export type DataToRegisterUser = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type DataRegisterResponse = {
  _id: string;
  name: string;
  token: string;
};

export type ErrorResponse = {
  error: string;
};
