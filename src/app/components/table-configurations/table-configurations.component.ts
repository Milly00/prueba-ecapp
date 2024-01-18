import {  ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ConfigurationsDeliveryAreaModel } from 'src/domain/models/configuration-delivery-area.model';
import { ConfigurationsRoutesModel } from 'src/domain/models/configuration-routes.model';
import { ConfigurationsMicroroutesModel } from 'src/domain/models/configuration-microroutes.model';
import { ConfigurationsWarehouseModel } from 'src/domain/models/configuration-warehouses.model';
import { NameColumnTablePipe } from 'src/global/pipes/name-column-table.pipe';
import {  MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table-configurations',
  standalone: true,
  imports: [CommonModule, MaterialModule, TablerIconsModule,NameColumnTablePipe],
  templateUrl: './table-configurations.component.html',
  styleUrls: ['./table-configurations.component.scss'],
})
export class TableConfigurationsComponent implements OnChanges {


  @Output() editConfiguration = new EventEmitter<
    | ConfigurationsWarehouseModel
    | ConfigurationsDeliveryAreaModel
    | ConfigurationsMicroroutesModel
    | ConfigurationsRoutesModel
  >();

  @Output() deleteElement = new EventEmitter<any>();
  // table 2
  @Input() displayedColumns2: string[] = [
    'code',
    'cityId',
    'operationStartDate',
    'action',
  ];

  @Input() data!: any [];
  dataSource!: MatTableDataSource<any>;

  constructor(private cdr: ChangeDetectorRef){
    this.dataSource = new MatTableDataSource(this.data);

  }

  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.dataSource = new MatTableDataSource(this.data);
    }
  }

  
  EditConfigurations(
    event:
      | ConfigurationsWarehouseModel
      | ConfigurationsDeliveryAreaModel
      | ConfigurationsMicroroutesModel
      | ConfigurationsRoutesModel
  ) {
   // console.log(event);
    this.editConfiguration.emit(event);
  }

  DeleteElement(event: any){
    this.deleteElement.emit(event);
  }

 
}
