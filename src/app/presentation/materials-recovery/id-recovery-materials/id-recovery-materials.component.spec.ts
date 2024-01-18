import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdRecoveryMaterialsComponent } from './id-recovery-materials.component';

describe('IdRecoveryMaterialsComponent', () => {
  let component: IdRecoveryMaterialsComponent;
  let fixture: ComponentFixture<IdRecoveryMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IdRecoveryMaterialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IdRecoveryMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
