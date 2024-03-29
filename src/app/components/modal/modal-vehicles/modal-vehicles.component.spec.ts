import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalVehiclesComponent } from './modal-vehicles.component';

describe('ModalVehiclesComponent', () => {
  let component: ModalVehiclesComponent;
  let fixture: ComponentFixture<ModalVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalVehiclesComponent]
    });
    fixture = TestBed.createComponent(ModalVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
