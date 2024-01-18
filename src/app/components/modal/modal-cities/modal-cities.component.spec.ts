import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCitiesComponent } from './modal-cities.component';

describe('ModalCitiesComponent', () => {
  let component: ModalCitiesComponent;
  let fixture: ComponentFixture<ModalCitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalCitiesComponent]
    });
    fixture = TestBed.createComponent(ModalCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
