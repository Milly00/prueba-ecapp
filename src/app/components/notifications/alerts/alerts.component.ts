import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alerts',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss'],
})
export class AlertsComponent  {
  classColor: string = 'success';
  message: string = "Inicio éxitoso";
  constructor(private alertService: AlertService) {
    this.alertService.myClass$.subscribe((valor) => {
      this.classColor = valor;
    });
    this.alertService.myText$.subscribe((valor) => {
      this.message = valor;
    });
  }

  

  public setColor(name: string){
    this.classColor = name;
  }
}
