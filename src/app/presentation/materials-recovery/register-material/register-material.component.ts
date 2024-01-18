import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import { AssociatesModel } from 'src/domain/models/associates.model';
import { ClientsModel } from 'src/domain/models/clients.model';
import { ConfigurationMaterialsModel } from 'src/domain/models/configuration-materials.model';
import { ConfigurationsMicroroutesModel } from 'src/domain/models/configuration-microroutes.model';
import { ConfigurationVehiclesModel } from 'src/domain/models/configuration-vehicles.model';
import { ConfigurationsWarehouseModel } from 'src/domain/models/configuration-warehouses.model';
import { MaterialRecovery } from 'src/domain/models/materials-recovery.model';
import { CAddDeleteArray } from 'src/domain/usecases/configurations/add-delete-array.usecase';
import { OperationsMaterial } from 'src/domain/usecases/materials-recovery/operations.usecase';

@Component({
  selector: 'app-register-material',
  templateUrl: './register-material.component.html',
  styleUrl: './register-material.component.scss',
})
export class RegisterMaterialComponent  {
  stepperLinear: boolean = false;
  isSmallScreen: string = 'horizontal';
  warehouse!: ConfigurationsWarehouseModel;
  emptyWarehouse: boolean = true;
  isSearchClient: boolean = false;
  isAddClient: boolean = false;
  isSearchAssociate: boolean = false;
  isAddMaterial: boolean = false;

  client!: ClientsModel;
  associate!: AssociatesModel;
  vehicle!: ConfigurationVehiclesModel;

  totalMaterial: number = 0;
  totalKG: number = 0;
  totalPercent: number = 0;
  totalPayment: number = 0;
  expressionsR = RegularExpressions;

  displayedColumnsMaterials: string[] = [
    'img',
    'code',
    'name',
    'weight',
    'wasteWeight',
    'unitPurchasePrice',
    'valuePaid',
    'delete',
  ];
  displayedColumnsMaterialsDetail: string[] = [
    'img',
    'code',
    'name',
    'weight',
    'wasteWeight',
    'unitPurchasePrice',
    'valuePaid',
  ];
  materialFormGroup = this._formBuilder.group({
    idMaterial: ['', [Validators.required, Validators.minLength(4)]],
    weight: [
      0,
      [Validators.required, Validators.pattern(this.expressionsR.number)],
    ],
    weightKG: [0, [Validators.required]],
    percent: [
      0,
      [Validators.required, Validators.pattern(this.expressionsR.number)],
    ],
    warehouse: ['', [Validators.required]],
    code: [''],
    name: [''],
    img: [''],
  });

  collectionMaterials: MaterialRecovery[] = [];
  collectionMicroRoutes: ConfigurationsMicroroutesModel[] = [];
  collectionMaterialsTable: any[] = [];

  displayedColumnsMR = [
    'code',
    'macroRouteId',
    'name',
    'microRouteType',
    'operationStartDate',
    'delete',
  ];

  status = ['ACTIVE', 'INACTIVE', 'ALL'];
  selectedFile!: File;
  siteWaste = ['Sitio 1', 'Sitio2'];

  //Falta recibir datos del cliente
  stepperOrientation!: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private operationsM: OperationsMaterial,
    private setArrayMC: CAddDeleteArray,
    private store: Store,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  

  get f() {
    return this.materialFormGroup.controls;
  }
  getWarehouse(event: any) {
    //console.log(event);
    this.emptyWarehouse = false;
    this.warehouse = event;
  }

  getClient(event: any) {
    this.client = event;
  }

  getAssociate(event: any) {
    //console.log(event);
    this.associate = event;
  }

  getMaterial(event: ConfigurationMaterialsModel) {
    //console.log(event);

    this.f.weightKG.setValue(event.purchasePrice);
    this.f.idMaterial.setValue(String(event.materialId));
    this.f.code.setValue(event.code);
    this.f.img.setValue(event.img!);
    this.f.name.setValue(event.name);
  }

  getWarehouseMaterial(event: any) {
    //console.log(event);
    this.f.warehouse.setValue(event.code);
  }

  getMicroRoute(event: any) {
    //console.log(event);
    this.collectionMicroRoutes = event;
    //console.log(this.collectionMicroRoutes);
  }

  getVehicle(event: any) {
    this.vehicle = event;
  }

  deleteMicroRoute(element: any) {
    this.collectionMicroRoutes = this.setArrayMC.setElementsArrayByCode(
      element.code,
      element,
      this.collectionMicroRoutes
    );
  }
  deleteMaterial(element: any) {
    this.collectionMaterialsTable = this.setArrayMC.setElementsArrayByCode(
      element.code,
      element,
      this.collectionMaterialsTable
    );
  }
  addMaterial() {
    const priceEnd = this.operationsM.calculateValuePaid(
      this.f.weight.value!,
      this.f.percent.value!,
      this.f.weightKG.value!
    );
    const material: MaterialRecovery = {
      accountMaterialId: this.f.idMaterial.value!,
      weight: this.f.weight.value!,
      wasteWeight: this.f.percent.value!,
      unitPurchasePrice: this.f.weightKG.value!,
      valuePaid: priceEnd,
      wasteDestinationSiteId: this.f.warehouse.value!,
    };

    this.collectionMaterials = [...this.collectionMaterials, material];
    this.addMaterialTable(priceEnd);
    this.getTotal();
    this.isAddMaterial = false;
  }
  addMaterialTable(priceEnd: number) {
    const material = {
      accountMaterialId: this.f.idMaterial.value!,
      weight: this.f.weight.value!,
      wasteWeight: this.f.percent.value!,
      unitPurchasePrice: this.f.weightKG.value!,
      valuePaid: priceEnd,
      wasteDestinationSiteId: this.f.warehouse.value!,
      name: this.f.name.value!,
      code: this.f.code.value!,
      img: this.f.img.value!,
    };
    this.collectionMaterialsTable = [
      ...this.collectionMaterialsTable,
      material,
    ];
    //this.collectionMaterialsTable.push(material);    
    this.materialFormGroup.reset();
  }
  getTotal() {
    this.totalMaterial = this.collectionMaterials.length;
    this.totalPercent = this.operationsM.calculateTotalWasteKG(
      this.collectionMaterials
    );
    this.totalPayment = this.operationsM.calculateTotalPayment(
      this.collectionMaterials
    );
    this.totalKG = this.operationsM.calculateTotalKG(this.collectionMaterials);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      // Aquí puedes realizar la lógica para subir el archivo.
      // Puedes utilizar servicios, HttpClient, etc.
      console.log('Archivo seleccionado:', this.selectedFile);
      // Implementa la lógica de carga aquí.
    } else {
      console.log('No se ha seleccionado ningún archivo.');
    }
  }
}
