import { ConfigurationsDeliveryAreaModel } from './../../../../domain/models/configuration-delivery-area.model';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ModalCitiesComponent } from 'src/app/components/modal/modal-cities/modal-cities.component';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import { MaterialModule } from 'src/app/material/material.module';

@Component({
  selector: 'app-register-delivery-areas',
  templateUrl: './register-delivery-areas.component.html',
  styleUrls: ['./register-delivery-areas.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    FormsModule,
    ModalCitiesComponent
  ],
})
export class RegisterDeliveryAreasComponent {
  action: string = '';
  img: string | ArrayBuffer | null = '../assets/images/profile/user-1.jpg';
  code: string = '';
  cityId: string = '';
  name: string = '';
  operationStartDate!: string;


  @Output() dataDeliveryArea =
    new EventEmitter<ConfigurationsDeliveryAreaModel>();

    expressionsR = RegularExpressions;

    registerFormGroup = this._formBuilder.group({
      code: [
        '',
        [
          Validators.required,
          Validators.pattern(this.expressionsR.alfanumeric),
          Validators.minLength(4),
        ],
      ],
      city: [
        '',
        [
          Validators.required,
          Validators.pattern(this.expressionsR.name),
          Validators.minLength(4),
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
     date: ['',[Validators.required]]
    });

  constructor(private _formBuilder: FormBuilder) {}

  get f() {
    return this.registerFormGroup.controls;
  }
  selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      // this.msg = 'You must select an image';
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.msg = "Only images are supported";
      return;
    }
    // tslint:disable-next-line - Disables all
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line - Disables all
    reader.onload = () => {
      // tslint:disable-next-line - Disables all
      this.img = reader.result;
    };
  }

  sendInformation() {
    const data: ConfigurationsDeliveryAreaModel = {
      code: this.code,
      cityId: this.cityId,
      name: this.name,
      operationStartDate: this.operationStartDate,
      imageArea: this.img!,
    };
    this.dataDeliveryArea.emit(data);
  }
}
