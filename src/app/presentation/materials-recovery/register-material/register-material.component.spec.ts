import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMaterialComponent } from './register-material.component';

describe('RegisterMaterialComponent', () => {
  let component: RegisterMaterialComponent;
  let fixture: ComponentFixture<RegisterMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
