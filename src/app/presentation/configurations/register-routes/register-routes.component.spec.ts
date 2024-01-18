import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRoutesComponent } from './register-routes.component';

describe('RegisterRoutesComponent', () => {
  let component: RegisterRoutesComponent;
  let fixture: ComponentFixture<RegisterRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterRoutesComponent]
    });
    fixture = TestBed.createComponent(RegisterRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
