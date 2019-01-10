import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CASINOComponent } from './casino.component';

describe('CASINOComponent', () => {
  let component: CASINOComponent;
  let fixture: ComponentFixture<CASINOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CASINOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CASINOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
