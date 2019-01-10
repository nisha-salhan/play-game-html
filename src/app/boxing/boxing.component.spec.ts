import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOXINGComponent } from './boxing.component';

describe('BOXINGComponent', () => {
  let component: BOXINGComponent;
  let fixture: ComponentFixture<BOXINGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOXINGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOXINGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
