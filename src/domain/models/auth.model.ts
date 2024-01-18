export interface AuthLoginModel {
  codeAccount: string;
  user: string;
  password: string;
}

export interface AuthRegisterModel {
  codeSui?: string;
  nit: string;
  name: string;
  email: string;
  organizationType?: string,
}

export interface AuthRecoveryPasswordModel {
  user: string;
  codeSui: string;
}

export interface AuthVerifyAccountModel {
  city: string;
  contact: {
    mobileNumber: string;
    responsibleName: string;
  };
  accessData: {
    userName: string;
    password: string;
  };
}

export interface AuthResendConfirmationModel{
    codeSui: string,
    email: string,
}