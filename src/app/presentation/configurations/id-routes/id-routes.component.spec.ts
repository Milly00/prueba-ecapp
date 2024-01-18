import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdRoutesComponent } from './id-routes.component';

describe('IdRoutesComponent', () => {
  let component: IdRoutesComponent;
  let fixture: ComponentFixture<IdRoutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdRoutesComponent]
    });
    fixture = TestBed.createComponent(IdRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
