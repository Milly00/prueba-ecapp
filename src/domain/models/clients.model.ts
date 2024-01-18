export enum IdentityType {
  CC = 'CC',
  CE = 'CE',
  Pasaporte = 'Pasaporte',
  Nit = 'Nit',
}

export enum ClientType {
  ESCUELA = 'ESCUELA',
  UNIVERSIDAD = 'UNIVERSIDAD',
  UNIDAD_RESIDENCIAL = 'UNIDAD_RESIDENCIAL',
  RESTAURANTE = 'RESTAURANTE',
  CENTRO_COMERCIAL = 'CENTRO_COMERCIAL',
  MICRO_EMPRESA = 'MICRO_EMPRESA',
  EMPRESA = 'EMPRESA',
  OTRA = 'OTRA',
  PERSONA_NATURAL = 'PERSONA_NATURAL',
}

export enum SectorIndustry {
  AGROINDUSTRIA = 'AGROINDUSTRIA',
  SERVICIOS = 'SERVICIOS',
  INDUSTRIAL = 'INDUSTRIAL',
  TRANSPORTE = 'TRANSPORTE',
  COMERCIO = 'COMERCIO',
  FINANCIERO = 'FINANCIERO',
  CONSTRUCCION = 'CONSTRUCCIÓN',
  MINERO_ENERGETICO = 'MINERO-ENERGETICO',
  COMUNICACIONES = 'COMUNICACIONES',
  TURISMO = 'TURISMO',
  HOSPITALARIO = 'HOSPITALARIO',
  OTRO = 'OTRO',
}
export interface ClientsModel {
  identityType: 'CC' | 'CE' | 'Pasaporte' | 'Nit';
  identity: string;
  name: string;
  clientType:
    | ClientType.CENTRO_COMERCIAL
    | ClientType.EMPRESA
    | ClientType.ESCUELA
    | ClientType.MICRO_EMPRESA
    | ClientType.OTRA
    | ClientType.RESTAURANTE
    | ClientType.UNIDAD_RESIDENCIAL
    | ClientType.UNIVERSIDAD
    | ClientType.PERSONA_NATURAL | string;
  phoneNumber: string;
  email: string;
  industrySector:
    | SectorIndustry.AGROINDUSTRIA
    | SectorIndustry.COMERCIO
    | SectorIndustry.COMUNICACIONES
    | SectorIndustry.CONSTRUCCION
    | SectorIndustry.FINANCIERO
    | SectorIndustry.HOSPITALARIO
    | SectorIndustry.INDUSTRIAL
    | SectorIndustry.MINERO_ENERGETICO
    | SectorIndustry.OTRO
    | SectorIndustry.SERVICIOS
    | SectorIndustry.TRANSPORTE
    | SectorIndustry.TURISMO | string;
  cityId: string;
  address: string;
  registerWarehouseId: string;
}
