import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMaterialWarehouseComponent } from './register-material-warehouse.component';

describe('RegisterMaterialWarehouseComponent', () => {
  let component: RegisterMaterialWarehouseComponent;
  let fixture: ComponentFixture<RegisterMaterialWarehouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterMaterialWarehouseComponent]
    });
    fixture = TestBed.createComponent(RegisterMaterialWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
