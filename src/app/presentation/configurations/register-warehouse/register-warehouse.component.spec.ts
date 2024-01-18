import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWarehouseComponent } from './register-warehouse.component';

describe('RegisterWarehouseComponent', () => {
  let component: RegisterWarehouseComponent;
  let fixture: ComponentFixture<RegisterWarehouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterWarehouseComponent]
    });
    fixture = TestBed.createComponent(RegisterWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
