export interface ConfigurationVehiclesModel {
  code: string;
  vehicleType: VehicleType;
  plate: string;
  dimensions?: VehiclesDimensions;
  capacity?: number;
  capacity_y?: number;
  capacity_m?: number;
  numAxles?: number;
  propertyOf: PropertyOf;
  ownerId: string;
  warehouseId: string;
  imageVehicle?: string;
}

export enum VehicleType {
  CARRETA = 'CARRETA',
  COSTAL = 'COSTAL',
  TRICICLO = 'TRICICLO',
  MOTOCARRO = 'MOTOCARRO',
  OTRO = 'OTRO',
}

export enum PropertyOf {
  ASSOCIATE = 'Asociado',
  WAREHOUSE = 'Bodega',
  CLIENT = 'Cliente'
}

export interface VehiclesDimensions {
  height: number;
  width: number;
  lenght: number;
}
