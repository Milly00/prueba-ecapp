import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AssociatesModel } from 'src/domain/models/associates.model';

@Component({
  selector: 'app-associates',
  templateUrl: './associates.component.html',
  styleUrls: ['./associates.component.scss'],
  //host: { ngSkipHydration: 'true' },
})
export class AssociatesComponent {

  @HostBinding('attr.ngSkipHydration') ngSkipHydration = 'true';

  selectedCategory = 'All';
  allAssociates: AssociatesModel[] =  [
    {
      code: 'AJDU89',
      identityType: 'CC',
      identity: '10987654356',
      cityId: '1',
      documentPicture: 'assets/images/profile/user-1.jpg',
      name: 'Sunil Joshi',
      surnames: 'Web Designer',
      gender: 'M',
      status: 'ACTIVE',
      admisissionDate: '2023-10-11'
    },
    {
      code: 'AJDU89',     
      identityType: 'CC', 
      identity: '10987654356',
      cityId: '1',
      documentPicture: 'assets/images/profile/user-2.jpg',
      name: 'Andrew McDownland',
      surnames: 'Project Manager',
      gender: 'M',
      status: 'INACTIVE',
      admisissionDate: '2023-10-11'
    },
    {
      code: 'AJDU89',
      identityType: 'CC',
      identity: '10987654356',
      cityId: '1',
      documentPicture: 'assets/images/profile/user-3.jpg',
      name: 'Christopher Jamil',
      surnames: 'Project Manager',
      gender: 'M',
      status: 'ACTIVE',
      admisissionDate: '2023-10-11'
    },
    {
      code: 'AJDU89',
      identityType: 'CC',
      identity: '10987654356',
      cityId: '1',
      documentPicture: 'assets/images/profile/user-4.jpg',
      name: 'Nirav Joshi',
      surnames: 'Frontend Engineer',
      gender: 'M',
      status: 'ACTIVE',
      admisissionDate: '2023-10-11'
    },
    {
      code: 'AJDU89',
      identityType: 'CC',
      identity: '10987654356',
      cityId: '1',
      documentPicture: 'assets/images/profile/user-1.jpg',
      name: 'Sunil Joshi',
      surnames: 'Web Designer',
      gender: 'M',
      status: 'INACTIVE',
      admisissionDate: '2023-10-11'
    },
    {
      code: 'AJDU89',
      identityType: 'CC',
      identity: '10987654356',
      cityId: '1',
      documentPicture: 'assets/images/profile/user-2.jpg',
      name: 'Andrew McDownland',
      surnames: 'Project Manager',
      gender: 'M',
      status: 'ACTIVE',
      admisissionDate: '2023-10-11'
    },
    {
      code: 'AJDU89',
      identityType: 'CC',
      identity: '10987654356',
      cityId: '1',
      documentPicture: 'assets/images/profile/user-3.jpg',
      name: 'Christopher Jamil',
      surnames: 'Project Manager',
      gender: 'M',
      status: 'ACTIVE',
      admisissionDate: '2023-10-11'
    },
    {
      code: 'AJDU89',
      identityType: 'CC',
      identity: '10987654356',
      cityId: '1',
      documentPicture: 'assets/images/profile/user-4.jpg',
      name: 'Nirav Joshi',
      surnames: 'Frontend Engineer',
      gender: 'M',
      status: 'INACTIVE',
      admisissionDate: '2023-10-11'
    },
  ];
  constructor(private router: Router) {}

  applyFilter(event: Event): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const filterValue = (event.target as HTMLInputElement).value;
  }


  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  filter(v: string) {}


  getId(event: any) {
   // console.log(event);
    this.router.navigateByUrl(`/associates/update-associate/${event}`);
  }

  getSeeId(event: any) {
    //console.log(event);
    this.router.navigateByUrl(`/associates/associate/${event}`);
  }
}
