import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdVehiclesComponent } from './id-vehicles.component';

describe('IdVehiclesComponent', () => {
  let component: IdVehiclesComponent;
  let fixture: ComponentFixture<IdVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdVehiclesComponent]
    });
    fixture = TestBed.createComponent(IdVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
