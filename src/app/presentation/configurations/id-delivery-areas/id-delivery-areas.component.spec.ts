import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdDeliveryAreasComponent } from './id-delivery-areas.component';

describe('IdDeliveryAreasComponent', () => {
  let component: IdDeliveryAreasComponent;
  let fixture: ComponentFixture<IdDeliveryAreasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdDeliveryAreasComponent]
    });
    fixture = TestBed.createComponent(IdDeliveryAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
