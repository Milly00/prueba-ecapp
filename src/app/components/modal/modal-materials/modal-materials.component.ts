import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MaterialModule } from 'src/app/material/material.module';
import { SideNavService } from 'src/app/presentation/layouts/services/side-nav.service';
import { ConfigurationMaterialsModel } from 'src/domain/models/configuration-materials.model';
import { CMaterialsFilter } from 'src/domain/usecases/configurations/configurations-filter-materials.usecase';

@Component({
  selector: 'app-modal-materials',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
  ],
  templateUrl: './modal-materials.component.html',
  styleUrl: './modal-materials.component.scss',
})
export class ModalMaterialsComponent implements OnInit{
  valueMaterial: string = '';
  opened: boolean = false;

  @Output() material = new EventEmitter<any>();
  @Input() idMaterial: string = '';
  @Input() showFilters: boolean = false;
  searchTerm = new FormControl();

  allMaterials: ConfigurationMaterialsModel[] = [
    {
      materialId: 1,
      code: 'ABC123',
      name: 'Material1',
      description: 'Descripción del Material 1',
      purchasePrice: 50.99,
      img: 'assets/images/products/s6.jpg',
    },
    {
      materialId: 2,
      code: 'DEF456',
      name: 'Material2',
      description: 'Descripción del Material 2',
      purchasePrice: 30.5,
      img: 'assets/images/products/s6.jpg',
    },
    {
      materialId: 3,
      code: 'GHI789',
      name: 'Material3',
      description: 'Descripción del Material 3',
      purchasePrice: 75.25,
      img: 'assets/images/products/s6.jpg',
    },
    {
      materialId: 1,
      code: 'ABC122',
      name: 'Material1',
      description: 'Descripción del Material 1',
      purchasePrice: 50.99,
      img: 'assets/images/products/s6.jpg',
    },
    {
      materialId: 2,
      code: 'DEF45A',
      name: 'Material2',
      description: 'Descripción del Material 2',
      purchasePrice: 30.5,
      img: 'assets/images/products/s6.jpg',
    },
    {
      materialId: 3,
      code: 'GHI780',
      name: 'Material3',
      description: 'Descripción del Material 3',
      purchasePrice: 75.25,
      img: 'assets/images/products/s6.jpg',
    },
  ];
  filterMaterial: ConfigurationMaterialsModel[] = [];
  showModal: boolean = false;

  constructor(
    private filter: CMaterialsFilter,
    private sidebarService: SideNavService
  ) {
    this.getMaterials();
  }

  ngOnInit(): void {
    this.searchMaterials();
    this.valueMaterial = this.idMaterial;
  }

  getMaterials() {
    this.filterMaterial = this.allMaterials;
  }
  openModal() {
    this.opened = !this.opened;
    this.showModal = !this.showModal;
    this.sidebarService.showModal.next(this.showModal);
  }
  searchMaterials() {
    this.searchTerm.valueChanges.subscribe((query: string) => {
     // console.log(query);
      if (query.length > 2) {
        const filter = this.filter.filterMaterials(
          query.toLowerCase(),
          this.allMaterials
        );
        if (filter !== undefined) {
          this.filterMaterial = filter;
        } else {
          this.getMaterials();
        }
        //console.log(filter);
      } else {
        this.getMaterials();
      }
    });
  }

  sendMaterial(event: any) {
    //console.log(event);
    this.openModal();
    this.valueMaterial = event.name;
    this.material.emit(event);
  }
}
