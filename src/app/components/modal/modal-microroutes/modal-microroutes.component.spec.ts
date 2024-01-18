import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMicroroutesComponent } from './modal-microroutes.component';

describe('ModalMicroroutesComponent', () => {
  let component: ModalMicroroutesComponent;
  let fixture: ComponentFixture<ModalMicroroutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalMicroroutesComponent]
    });
    fixture = TestBed.createComponent(ModalMicroroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
