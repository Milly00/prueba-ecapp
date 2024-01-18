import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAssociatesComponent } from './modal-associates.component';

describe('ModalAssociatesComponent', () => {
  let component: ModalAssociatesComponent;
  let fixture: ComponentFixture<ModalAssociatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalAssociatesComponent]
    });
    fixture = TestBed.createComponent(ModalAssociatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
