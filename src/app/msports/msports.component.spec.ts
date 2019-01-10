import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSPORTSComponent } from './msports.component';

describe('MSPORTSComponent', () => {
  let component: MSPORTSComponent;
  let fixture: ComponentFixture<MSPORTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSPORTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSPORTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
