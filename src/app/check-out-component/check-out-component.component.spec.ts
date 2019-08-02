import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutComponentComponent } from './check-out-component.component';

describe('CheckOutComponentComponent', () => {
  let component: CheckOutComponentComponent;
  let fixture: ComponentFixture<CheckOutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
