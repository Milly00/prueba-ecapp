import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdWarehouseComponent } from './id-warehouse.component';

describe('IdWarehouseComponent', () => {
  let component: IdWarehouseComponent;
  let fixture: ComponentFixture<IdWarehouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdWarehouseComponent]
    });
    fixture = TestBed.createComponent(IdWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
