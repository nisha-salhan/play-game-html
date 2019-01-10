import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LIVEComponent } from './live.component';

describe('LIVEComponent', () => {
  let component: LIVEComponent;
  let fixture: ComponentFixture<LIVEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LIVEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LIVEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
