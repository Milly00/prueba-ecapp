import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMicroRoutesComponent } from './register-micro-routes.component';

describe('RegisterMicroRoutesComponent', () => {
  let component: RegisterMicroRoutesComponent;
  let fixture: ComponentFixture<RegisterMicroRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterMicroRoutesComponent]
    });
    fixture = TestBed.createComponent(RegisterMicroRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
