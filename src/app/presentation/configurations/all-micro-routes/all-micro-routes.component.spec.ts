import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMicroRoutesComponent } from './all-micro-routes.component';

describe('AllMicroRoutesComponent', () => {
  let component: AllMicroRoutesComponent;
  let fixture: ComponentFixture<AllMicroRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMicroRoutesComponent]
    });
    fixture = TestBed.createComponent(AllMicroRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
