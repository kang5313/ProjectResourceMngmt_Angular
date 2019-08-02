import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInComponentComponent } from './check-in-component.component';

describe('CheckInComponentComponent', () => {
  let component: CheckInComponentComponent;
  let fixture: ComponentFixture<CheckInComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckInComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
