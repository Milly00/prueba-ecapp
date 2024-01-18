import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeliveryAreasComponent } from './modal-delivery-areas.component';

describe('ModalDeliveryAreasComponent', () => {
  let component: ModalDeliveryAreasComponent;
  let fixture: ComponentFixture<ModalDeliveryAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeliveryAreasComponent]
    });
    fixture = TestBed.createComponent(ModalDeliveryAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
