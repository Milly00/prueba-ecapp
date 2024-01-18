import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { OptionDialogService } from './option-dialog.service';

@Component({
  selector: 'app-option-dialog',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './option-dialog.component.html',
  styleUrls: ['./option-dialog.component.scss']
})
export class OptionDialogComponent {

  text: string = '';
  title: string = '';
  classColor: string = 'text-cyan-600';
  bgColor: string = '';
  btnColor: string = '';
  icon: string = '';

  constructor(private dialog: OptionDialogService){
    this.dialog.myBg$.subscribe((valor) => {
      this.bgColor =  valor;
    });
    this.dialog.myClass$.subscribe((valor) => {
      this.classColor = valor;
    });
    this.dialog.myText$.subscribe((valor) => {
      this.text = valor;
    });
    this.dialog.myTitle$.subscribe((valor) => {
      this.title = valor;
    });
    this.dialog.myBtn$.subscribe((valor) => {
      this.btnColor = valor;
    });
    this.dialog.myIcon$.subscribe((valor) => {
      this.icon = valor;
    });
  }

}
