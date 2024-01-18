import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWarehousesComponent } from './modal-warehouses.component';

describe('ModalWarehousesComponent', () => {
  let component: ModalWarehousesComponent;
  let fixture: ComponentFixture<ModalWarehousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalWarehousesComponent]
    });
    fixture = TestBed.createComponent(ModalWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
