import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationsMicroroutesModel } from 'src/domain/models/configuration-microroutes.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CMicroroutesFilter } from 'src/domain/usecases/configurations/configurations-filter-microroutes.usecase';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SideNavService } from 'src/app/presentation/layouts/services/side-nav.service';
import { NameColumnTablePipe } from 'src/global/pipes/name-column-table.pipe';
import { CAddDeleteArray } from 'src/domain/usecases/configurations/add-delete-array.usecase';
import { Store } from '@ngrx/store';
import { updateAllMicroRoutes } from 'src/domain/actions/configurations/micro-routes.actions';

@Component({
  selector: 'app-modal-microroutes',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    NameColumnTablePipe,
  ],
  templateUrl: './modal-microroutes.component.html',
  styleUrls: ['./modal-microroutes.component.scss'],
})
export class ModalMicroroutesComponent implements OnChanges , OnInit{
  @Output() microroute = new EventEmitter<any>();
  @Output() collectionMicroroutes = new EventEmitter<any[]>();
  @Input() showFilters: boolean = false;
  searchTerm = new FormControl();
  valueMicroroute: string = '';
  collectionsLocalMR: ConfigurationsMicroroutesModel[] = [];
  @Input() copyMicroRoutes: any[] = [];
  allMicroroutes = [
    {
      code: 'MCR12349',
      macroRouteId: 'MACREIRO',
      operationStartDate: '2023-10-05',
      name: 'MicroRuta NJD',
      imageMicroRoute: '../assets/images/products/s6.jpg',
      microRouteType: 'T2',
      selected: false,
    },
    {
      code: 'MCR12348',
      macroRouteId: 'MACREIRO',
      operationStartDate: '2023-10-05',
      name: 'MicroRuta HDF',
      imageMicroRoute: '../assets/images/products/s6.jpg',
      microRouteType: 'T2',
      selected: false,
    },
    {
      code: 'MCR12346',
      macroRouteId: 'MACREIRO',
      operationStartDate: '2023-10-05',
      name: 'MicroRuta KLP',
      imageMicroRoute: '../assets/images/products/s6.jpg',
      microRouteType: 'T2',
      selected: false,
    },
    {
      code: 'MCR12345',
      macroRouteId: 'MACREIRO',
      operationStartDate: '2023-10-05',
      name: 'MicroRuta GTS',
      imageMicroRoute: '../assets/images/products/s6.jpg',
      microRouteType: 'T2',
      selected: false,
    },
    {
      code: 'MCR12346',
      macroRouteId: 'MCSREIRO1',
      operationStartDate: '2023-10-05',
      name: 'MicroRuta NBG',
      imageMicroRoute: '../assets/images/products/s6.jpg',
      microRouteType: 'T2',
      selected: false,
    },
  ];

  filterMicroroutes: any[] = [];
  opened: boolean = false;
  showModal: boolean = false;
  status = ['ACTIVE', 'INACTIVE', 'ALL'];

  constructor(
    private filter: CMicroroutesFilter,
    private sidebarService: SideNavService,
    private setArray: CAddDeleteArray,
    private store: Store
  ) {
    this.getMicroroutes();
    //console.log(this.copyMicroRoutes);
  }

  ngOnInit(): void {
    this.searchMicroroutes();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ngOnChanges(changes: SimpleChanges): void {
    this.loadMicroRoutes();
  }

  loadMicroRoutes() {

    //Para actualizar los checkbox del modal
    const updatedMicroroutes = [...this.allMicroroutes];
    if (this.copyMicroRoutes.length > 0) {
      for (let i = 0; i < this.copyMicroRoutes.length; i++) {
        const element = this.copyMicroRoutes[i].code;
        const index = updatedMicroroutes.findIndex((el) => el.code === element);
        if (index !== -1) {
          updatedMicroroutes[index] = {
            ...updatedMicroroutes[index],
            selected: true,
          };
        }
      }
    }
    this.filterMicroroutes = updatedMicroroutes;
  }

  openModal() {
    this.opened = !this.opened;
    this.showModal = !this.showModal;
    this.sidebarService.showModal.next(this.showModal);
  }

  getMicroroutes() {
    this.filterMicroroutes = this.allMicroroutes;
  }

  searchMicroroutes() {
    this.searchTerm.valueChanges.subscribe((query: string) => {
      if (query.length > 2) {
        const filter = this.filter.filterMicroroutes(
          query.toLowerCase(),
          this.allMicroroutes
        );
        if (filter !== undefined) {
          this.filterMicroroutes = filter;
        } else {
          this.getMicroroutes();
        }
      } else {
        this.getMicroroutes();
      }
    });
  }

  addMicroRoutes(microRoutes: any) {
    const CMR = this.collectionsLocalMR;
    this.collectionsLocalMR = this.setArray.setElementsArrayByCode(
      microRoutes.code,
      microRoutes,
      CMR
    );
  }
  sendRoute(event: any) {
    this.openModal();
    this.valueMicroroute = event.name;
    this.microroute.emit(event);
  }

  sendCollections() {
    this.collectionMicroroutes.emit(this.collectionsLocalMR);
    this.store.dispatch(
      updateAllMicroRoutes({ microRoutes: this.collectionsLocalMR })
    );
    this.openModal();
  }
}
