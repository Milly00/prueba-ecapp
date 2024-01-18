import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdMicroRoutesComponent } from './id-micro-routes.component';

describe('IdMicroRoutesComponent', () => {
  let component: IdMicroRoutesComponent;
  let fixture: ComponentFixture<IdMicroRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdMicroRoutesComponent]
    });
    fixture = TestBed.createComponent(IdMicroRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
