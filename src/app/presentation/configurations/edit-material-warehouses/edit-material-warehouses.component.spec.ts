import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaterialWarehousesComponent } from './edit-material-warehouses.component';

describe('EditMaterialWarehousesComponent', () => {
  let component: EditMaterialWarehousesComponent;
  let fixture: ComponentFixture<EditMaterialWarehousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditMaterialWarehousesComponent]
    });
    fixture = TestBed.createComponent(EditMaterialWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
