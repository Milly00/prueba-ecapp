import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { CCitiesFilter } from 'src/domain/usecases/configurations/configurations-filter-cities.usecase';
import { SideNavService } from 'src/app/presentation/layouts/services/side-nav.service';

@Component({
  selector: 'app-modal-cities',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
  ],
  templateUrl: './modal-cities.component.html',
  styleUrls: ['./modal-cities.component.scss'],
})
export class ModalCitiesComponent implements OnInit{
  @Output() city = new EventEmitter<any>();

  searchTerm = new FormControl();
  valueCity: string = '';

  cities = [
    {
      departamento: 'Amazonas',
      ciudad: 'Leticia',
      codigo_postal: '110011',
    },
    {
      departamento: 'Amazonas',
      ciudad: 'Puerto Nariño',
      codigo_postal: '110021',
    },
    {
      departamento: 'Antioquia',
      ciudad: 'Medellín',
      codigo_postal: '050001',
    },
    {
      departamento: 'Antioquia',
      ciudad: 'Bello',
      codigo_postal: '051001',
    },
    {
      departamento: 'Antioquia',
      ciudad: 'Envigado',
      codigo_postal: '055421',
    },
    {
      departamento: 'Atlántico',
      ciudad: 'Barranquilla',
      codigo_postal: '080001',
    },
    {
      departamento: 'Atlántico',
      ciudad: 'Soledad',
      codigo_postal: '083001',
    },
    // Puedes agregar más ciudades según sea necesario
  ];

  
  filterCities: any = [];
  opened: boolean = false;
  showModal: boolean = false;

  constructor(private filter: CCitiesFilter,private sidebarService: SideNavService) {
    this.getCities();
  }

  ngOnInit(): void {
    this.searchCities();
  }

  openModal() {
    this.opened = !this.opened;
    this.showModal = !this.showModal;
    this.sidebarService.showModal.next(this.showModal);
  }

  getCities() {
    this.filterCities = this.cities;
  }

  searchCities() {
    this.searchTerm.valueChanges.subscribe((query: string) => {
      //console.log(query);
      if (query.length > 2) {
        const filter = this.filter.filterCities(
          query.toLowerCase(),
          this.cities
        );
        if (filter !== undefined) {
          this.filterCities = filter;
        } else {
          this.getCities();
        }
        //console.log(filter);
      } else {
        this.getCities();
      }
    });
  }

  sendCities(event: any) {
    //console.log(event);
    this.openModal();
    this.valueCity = event.ciudad;
    this.city.emit(event);
  }
}
