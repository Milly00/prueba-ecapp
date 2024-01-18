import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMaterialsComponent } from './all-materials.component';

describe('AllMaterialsComponent', () => {
  let component: AllMaterialsComponent;
  let fixture: ComponentFixture<AllMaterialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMaterialsComponent]
    });
    fixture = TestBed.createComponent(AllMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
