import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRoutesComponent } from './all-routes.component';

describe('AllRoutesComponent', () => {
  let component: AllRoutesComponent;
  let fixture: ComponentFixture<AllRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllRoutesComponent]
    });
    fixture = TestBed.createComponent(AllRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
