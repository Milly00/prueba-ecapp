import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import { IdentityType } from 'src/domain/models/associates.model';
import { ClientType, SectorIndustry } from 'src/domain/models/clients.model';
interface EnumIdentityType {
  status: IdentityType;
  // Otras propiedades aquí
}
interface EnumClientType {
  status: ClientType;
}

interface EnumSectorIndustry {
  status: SectorIndustry;
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  expressionsR = RegularExpressions;

  selectedIdentity = 'All';
  typesIdenity: EnumIdentityType[] = [
    { status: IdentityType.CC },
    { status: IdentityType.CE },
    { status: IdentityType.Nit },
    { status: IdentityType.Pasaporte },
  ];

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
  firstFormGroup = this._formBuilder.group({
    clientType: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
      ],
    ],
    identity: [
      {value: '', disabled: true},
      [
        Validators.required,
        Validators.pattern(this.expressionsR.nit),
        Validators.minLength(6),
      ],
    ],
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.name),
        Validators.minLength(4),
      ],
    ],
    phoneNumber: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.phone),
        Validators.minLength(4),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.email),
        Validators.minLength(4),
      ],
    ],
    industrySector: [{value: ''}, [Validators.required]],
    typeIdentity: [{value: '', disabled: true}, [Validators.required]],
    city: ['', [Validators.required]],
    address: ['', [Validators.required,Validators.pattern(this.expressionsR.text)]],
  });

  constructor(private _formBuilder: FormBuilder) {}

  get f() {
    return this.firstFormGroup.controls;
  }
}
