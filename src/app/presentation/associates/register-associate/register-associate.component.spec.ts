import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAssociateComponent } from './register-associate.component';

describe('RegisterAssociateComponent', () => {
  let component: RegisterAssociateComponent;
  let fixture: ComponentFixture<RegisterAssociateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterAssociateComponent]
    });
    fixture = TestBed.createComponent(RegisterAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
