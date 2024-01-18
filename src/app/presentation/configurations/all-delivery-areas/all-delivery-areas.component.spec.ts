import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeliveryAreasComponent } from './all-delivery-areas.component';

describe('AllDeliveryAreasComponent', () => {
  let component: AllDeliveryAreasComponent;
  let fixture: ComponentFixture<AllDeliveryAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllDeliveryAreasComponent]
    });
    fixture = TestBed.createComponent(AllDeliveryAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
