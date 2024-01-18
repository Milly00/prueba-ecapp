import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ClientType,
  ClientsModel,
  SectorIndustry,
} from 'src/domain/models/clients.model';
interface EnumClientType {
  status: ClientType;
}

interface EnumSectorIndustry {
  status: SectorIndustry;
}
@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.scss'],
})
export class AllClientsComponent {
  typesClient: EnumClientType[] = [
    {
      status: ClientType.CENTRO_COMERCIAL,
    },
    {
      status: ClientType.EMPRESA,
    },
    {
      status: ClientType.ESCUELA,
    },
    {
      status: ClientType.MICRO_EMPRESA,
    },
    {
      status: ClientType.OTRA,
    },
    {
      status: ClientType.PERSONA_NATURAL,
    },
    {
      status: ClientType.RESTAURANTE,
    },
    {
      status: ClientType.UNIDAD_RESIDENCIAL,
    },
    {
      status: ClientType.UNIVERSIDAD,
    },
  ];

  sectorIndustries: EnumSectorIndustry[] = [
    {
      status: SectorIndustry.AGROINDUSTRIA,
    },
    {
      status: SectorIndustry.COMERCIO,
    },
    {
      status: SectorIndustry.COMUNICACIONES,
    },
    {
      status: SectorIndustry.CONSTRUCCION,
    },
    {
      status: SectorIndustry.FINANCIERO,
    },
    {
      status: SectorIndustry.HOSPITALARIO,
    },
    {
      status: SectorIndustry.INDUSTRIAL,
    },
    {
      status: SectorIndustry.MINERO_ENERGETICO,
    },
    {
      status: SectorIndustry.OTRO,
    },
    {
      status: SectorIndustry.SERVICIOS,
    },
    {
      status: SectorIndustry.TRANSPORTE,
    },
    {
      status: SectorIndustry.TURISMO,
    },
  ];

  displayedColumns = ['name', 'identityType','identity','industrySector','clientType','action']
  allClients: ClientsModel[] = [
    {
      identityType: 'CC',
      identity: '123456789',
      name: 'Juan Perez',
      clientType: 'PERSONA_NATURAL',
      phoneNumber: '555-1234',
      email: 'juan@example.com',
      industrySector: 'AGROINDUSTRIA',
      cityId: 'Bogota',
      address: 'Calle 123, No. 456',
      registerWarehouseId: 'WRH789',
    },
    {
      identityType: 'CC',
      identity: '987654321',
      name: 'Maria Rodriguez',
      clientType: 'PERSONA_NATURAL',
      phoneNumber: '555-5678',
      email: 'maria@example.com',
      industrySector: 'TECNOLOGIA',
      cityId: 'Medellin',
      address: 'Avenida 456, No. 789',
      registerWarehouseId: 'WRH456',
    },
  ];

    constructor(private router: Router){
      
    }
  getUser(event: any){
    this.router.navigateByUrl(`/clients/client/${event}`)
  }
}
