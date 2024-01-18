import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVehiclesComponent } from './register-vehicles.component';

describe('RegisterVehiclesComponent', () => {
  let component: RegisterVehiclesComponent;
  let fixture: ComponentFixture<RegisterVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterVehiclesComponent]
    });
    fixture = TestBed.createComponent(RegisterVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
