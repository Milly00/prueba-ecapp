// eslint-disable-next-line @typescript-eslint/no-unused-vars
enum Estado {
  Activo = 'Activo',
  Inactivo = 'Inactivo',
  Pendiente = 'Pendiente',
}
export enum IdentityType {
  CC = 'CC',
  CE = 'CE',
  Pasaporte = 'Pasaporte',
  Nit = 'Nit',
}

export enum Gender {
  M = 'M',
  F = 'F',
  O = 'O',
}

export enum MaritalStatus {
  Soltero = 'Soltero',
  Casado = 'Casado',
  Union_Libre = 'Union Libre',
  Separado = 'Separado',
  Divorciado = 'Divorciado',
  Viudo = 'Viudo',
}

export enum HousingType {
  Propia = 'Propia',
  Arriendo = 'Arriendo',
  Familiar = 'Familiar',
}

export enum EducationLevel {
  Ninguno = 'Ninguno',
  Bachiller = 'Bachiller',
  Tecnico = 'Tecnico',
  Tecnologo = 'Tecnologo',
  Profesional = 'Profesional',
  Especializacion = 'Especialización',
}
export interface AssociatesModel {
  code: string;
  identityType: IdentityType | 'CC';
  identity: string;
  cityId: string;
  name: string;
  surnames: string;
  gender: Gender | 'F' |'M';
  admisissionDate: string;
  birthDate?: string;
  phoneNumber?: string;
  email?: string;
  identityIdocumentDetail?: IdentityIdocumentDetail;
  address?: string;
  nationality?: string;
  documentPicture?: string;
  documentIdentity?: string;
  documentCV?: string;
  documentBankingCertificación?: string;
  status ?: string;
  detail?: DetailAssociate
}

export interface DetailAssociate{
  maritalStatus?: MaritalStatus;
  contactPerson?: ContactPerson;
  housingType?: HousingType;
  educationLevel?: EducationLevel;
  socialSecurity?: SocialSecurity;
  endowmentSizes?: EndowmentSizes;
  bankInformation?: BankInformation;
}
export interface BankInformation {
  bank: string;
  accountType: string;
  accountNumber: string;
}

export interface ContactPerson {
  relationShip: string;
  phoneNumber: string;
}

export interface EndowmentSizes {
  shirt: string;
  pants: string;
  footwear: string;
}

export interface IdentityIdocumentDetail {
  issueCity: string;
  issueDate: string;
}

export interface SocialSecurity {
  eps: string;
  afp: string;
}
