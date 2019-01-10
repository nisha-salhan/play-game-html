import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COCKComponent } from './cock.component';

describe('COCKComponent', () => {
  let component: COCKComponent;
  let fixture: ComponentFixture<COCKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COCKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COCKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
