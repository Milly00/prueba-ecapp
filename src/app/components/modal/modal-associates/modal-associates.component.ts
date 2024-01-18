import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AssociatesFilter } from 'src/domain/usecases/associates/associates-filter.usecase';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SideNavService } from 'src/app/presentation/layouts/services/side-nav.service';
import { AssociatesModel } from 'src/domain/models/associates.model';
interface followercards {
  id: number;
  imgSrc: string;
  name: string;
  cityId: string;
  code: string;
  identity: string;
  typeIdentity: string;
}
@Component({
  selector: 'app-modal-associates',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    NgScrollbarModule
  ],
  templateUrl: './modal-associates.component.html',
  styleUrls: ['./modal-associates.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalAssociatesComponent implements OnInit {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() associate = new EventEmitter<any>();

  searchTerm = new FormControl();
  valueAssociate : string = '';

  allAssociates: followercards[] = [
    {
      id: 1,
      imgSrc: '/assets/images/profile/user-1.jpg',
      name: 'Andrew Grant',
      cityId: 'El Salvador',
      code: '12MSMSKS',
      identity: '1920293039',
      typeIdentity: 'CC',
    },
    {
      id: 2,
      imgSrc: '/assets/images/profile/user-2.jpg',
      name: 'Leo Pratt',
      cityId: 'Bulgaria',
      code: '12MSMSKS',
      identity: '1920293039',
      typeIdentity: 'CC',
    },
    {
      id: 3,
      imgSrc: '/assets/images/profile/user-3.jpg',
      name: 'Charles Nunez',
      cityId: 'Nepal',
      code: '12MSMSKS',
      identity: '1920293039',
      typeIdentity: 'CC',
    },
  ];

  filterAssociates: followercards[] = [];
  opened: boolean = false;
  showModal: boolean = false;

  constructor(private filter: AssociatesFilter,private sidebarService: SideNavService) {
    this.getAssociates();
  }

  ngOnInit(): void {
    this.searchUser();
  }

  openModal() {
    this.opened = !this.opened;
    this.showModal = !this.showModal;
    this.sidebarService.showModal.next(this.showModal);
  }

  getAssociates() {
    this.filterAssociates = this.allAssociates;
  }

  searchUser() {
    this.searchTerm.valueChanges.subscribe((query: string) => {
      //console.log(query);
      if (query.length > 2) {
        const filter = this.filter.filterUser(query.toLowerCase(), this.allAssociates);
        if (filter !== undefined) {
          this.filterAssociates = filter;
        } else {
          this.getAssociates();
        }
        //console.log(filter);
      } else {
        this.getAssociates();
      }
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendAssociate(event: AssociatesModel | any){
    //console.log(event);
    this.openModal();
    this.valueAssociate = event.name;
    this.associate.emit(event);
  }
}
