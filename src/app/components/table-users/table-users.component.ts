import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgScrollbarModule } from 'ngx-scrollbar';


@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss'],
  standalone: true,
  imports: [MaterialModule,CommonModule,TablerIconsModule,NgScrollbarModule]
})
export class TableUsersComponent implements AfterViewInit {


  @Input() title: string = 'Asociados';
  @Input() description: string = 'Tabla de Asociados registrados en el sistema';
  @Input() data!: any ;
  @Input() typeTable: string = 'all';
  @Output() editUser = new EventEmitter<string>();
  @Output() seeUser = new EventEmitter<string>();

  @Input() displayedColumns = ['associate', 'identity','code', 'status', 'admisissionDate','action'];
  //dataSource = new MatTableDataSource<AssociatesModel [] | ClientsModel []>(this.data);
  constructor() {
    /**
    breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
      this.displayedColumns = result.matches
        ? ['associate', 'identity','code', 'status', 'admisissionDate','action']
        : ['associate', 'identity','code', 'status', 'admisissionDate','action'];
    }); */
  }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngAfterViewInit(): void {
    //this.dataSource.paginator = this.paginator;
  }

  EditUser(event: string ){
    this.editUser.emit(event);
  }

  SeeUser(event: any ){
    if(this.typeTable === 'associate'){
      this.seeUser.emit(event.code);
    }else{
      this.seeUser.emit(event.identity);

    }
    
  }
}

export interface Element {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}