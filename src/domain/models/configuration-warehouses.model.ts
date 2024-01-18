export interface ConfigurationsWarehouseModel {
  code: string;
  name: string;
  warehouseType: string;
  contactInfo?: ConfigurationContactPerson;
  location?: ConfigurationLocation;
  operationStartDate: string;
  imageWarehouse?: string;
}

interface ConfigurationContactPerson {
  name: string;
  phoneNumber: string;
  collaboratorId: string;
}

interface ConfigurationLocation {
  address: string;
  geolocation: Geolocation;
}

interface Geolocation {
  latitude: string;
  longitude: string;
}
