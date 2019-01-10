import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPORTSComponent } from './sports.component';

describe('SPORTSComponent', () => {
  let component: SPORTSComponent;
  let fixture: ComponentFixture<SPORTSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPORTSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPORTSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
