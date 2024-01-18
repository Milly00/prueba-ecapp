import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ConfigurationsRoutesModel } from 'src/domain/models/configuration-routes.model';
import { CRoutesFilter } from 'src/domain/usecases/configurations/configurations-filter-routes.usecase';
import { SideNavService } from 'src/app/presentation/layouts/services/side-nav.service';

@Component({
  selector: 'app-modal-routes',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
  ],
  templateUrl: './modal-routes.component.html',
  styleUrls: ['./modal-routes.component.scss'],
})
export class ModalRoutesComponent implements OnInit {

  @Output() route = new EventEmitter<any>();
  @Input() idRoute: string = '';

  searchTerm = new FormControl();
  valueRoute: string = '';
  allRoutes: ConfigurationsRoutesModel[] = [
    {
      areaId: 'MCR12345',
      nuap: '1',
      operationStartDate: '2023-10-05',
      name: 'Ruta 2',
      imageRoute: '../assets/images/products/s6.jpg',
      numMacro: 'MACR67S8',
    },
    {
      areaId: 'MCR5F55F',
      nuap: '1374842',
      operationStartDate: '2023-10-05',
      name: 'Ruta 2A',
      imageRoute: '../assets/images/products/s6.jpg',
      numMacro: 'MACR67S8',
    },
    {
      areaId: 'MCR26656',
      nuap: '458988',
      operationStartDate: '2023-10-05',
      name: 'Ruta 2WE',
      imageRoute: '../assets/images/products/s6.jpg',
      numMacro: 'MACRD7S8',
    },
    {
      areaId: 'MCR49404',
      nuap: '258999',
      operationStartDate: '2023-10-05',
      name: 'Ruta 1RT',
      imageRoute: '../assets/images/products/s6.jpg',
      numMacro: 'MACRF67S8',
    },
    {
      areaId: 'MCREIRO',
      nuap: '7998999',
      operationStartDate: '2023-10-05',
      name: 'Ruta 2E',
      imageRoute: '../assets/images/products/s6.jpg',
      numMacro: 'MACRD67S8',
    },
  ];

  filterRoutes: ConfigurationsRoutesModel[] = [];
  opened: boolean = false;
  showModal: boolean = false;

  constructor(private filter: CRoutesFilter,private sidebarService: SideNavService) {
    this.getRoutes();
  }

  ngOnInit(): void {
    this.searchRoutes();
    this.valueRoute = this.idRoute;
  }

  openModal() {
    this.opened = !this.opened;
    this.showModal = !this.showModal;
    this.sidebarService.showModal.next(this.showModal);
  }

  getRoutes() {
    this.filterRoutes = this.allRoutes;
  }

  searchRoutes() {
    this.searchTerm.valueChanges.subscribe((query: string) => {
      //console.log(query);
      if (query.length > 2) {
        const filter = this.filter.filterRoutes(
          query.toLowerCase(),
          this.allRoutes
        );
        if (filter !== undefined) {
          this.filterRoutes = filter;
        } else {
          this.getRoutes();
        }
        //console.log(filter);
      } else {
        this.getRoutes();
      }
    });
  }

  sendRoute(event: any) {
    //console.log(event);
    this.openModal();
    this.valueRoute = event.name;
    this.route.emit(event);
  }
}
