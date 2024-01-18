import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeliveryAreasComponent } from './register-delivery-areas.component';

describe('RegisterDeliveryAreasComponent', () => {
  let component: RegisterDeliveryAreasComponent;
  let fixture: ComponentFixture<RegisterDeliveryAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterDeliveryAreasComponent]
    });
    fixture = TestBed.createComponent(RegisterDeliveryAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
