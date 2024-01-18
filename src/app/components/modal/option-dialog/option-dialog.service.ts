import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OptionDialogComponent } from './option-dialog.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OptionDialogService {
  private classModal = new BehaviorSubject<string>('text-cyan-600');
  myClass$ = this.classModal.asObservable();

  private bgModal = new BehaviorSubject<string>('bg-sky-200');
  myBg$ = this.bgModal.asObservable();

  private textModal = new BehaviorSubject<string>('Tetxo');
  myText$ = this.textModal.asObservable();

  private titleModal = new BehaviorSubject<string>('Registro creado con éxito');
  myTitle$ = this.titleModal.asObservable();

  private btnModal = new BehaviorSubject<string>('bg-cyan-600');
  myBtn$ = this.btnModal.asObservable();

  private iconModal = new BehaviorSubject<string>('');
  myIcon$ = this.iconModal.asObservable();
  constructor(private dialog: MatDialog) {}

  openModal(
    classModal: string,
    bgModal: string,
    text: string,
    title: string,
    colorBtn: string,
    icon: string
  ) {
    this.bgModal.next(bgModal);
    this.classModal.next(classModal);
    this.textModal.next(text);
    this.titleModal.next(title);
    this.btnModal.next(colorBtn);
    this.iconModal.next(icon);

    const dialogRef = this.dialog.open(OptionDialogComponent, {
      width: '450px',
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  modalSucces(text: string, title: string) {
    this.openModal(
      'text-green-950',
      'bg-lime-300	',
      text,
      title,
      'bg-green-700',
      'check_circle'
    );
  }

  modalError(text: string, title: string) {
    this.openModal(
      'text-red-600',
      'bg-red-200',
      text,
      title,
      'bg-red-700',
      'cancel'
    );
  }

  modalInfo(text: string, title: string) {
    this.openModal(
      'text-cyan-600',
      'bg-sky-200',
      text,
      title,
      'bg-cyan-600',
      'info'
    );
  }

  modalWarning(text: string, title: string) {
    this.openModal(
      'text-orange-700',
      'bg-orange-300',
      text,
      title,
      'bg-orange-600',
      'warning'
    );
  }
}
