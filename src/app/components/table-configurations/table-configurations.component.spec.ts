import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConfigurationsComponent } from './table-configurations.component';

describe('TableConfigurationsComponent', () => {
  let component: TableConfigurationsComponent;
  let fixture: ComponentFixture<TableConfigurationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableConfigurationsComponent]
    });
    fixture = TestBed.createComponent(TableConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
