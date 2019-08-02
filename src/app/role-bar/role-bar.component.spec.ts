import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBarComponent } from './role-bar.component';

describe('RoleBarComponent', () => {
  let component: RoleBarComponent;
  let fixture: ComponentFixture<RoleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
