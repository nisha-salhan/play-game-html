import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PROMOTIONSComponent } from './promotions.component';

describe('PROMOTIONSComponent', () => {
  let component: PROMOTIONSComponent;
  let fixture: ComponentFixture<PROMOTIONSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PROMOTIONSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PROMOTIONSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
