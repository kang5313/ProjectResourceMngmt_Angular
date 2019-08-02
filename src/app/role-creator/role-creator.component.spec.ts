import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCreatorComponent } from './role-creator.component';

describe('RoleCreatorComponent', () => {
  let component: RoleCreatorComponent;
  let fixture: ComponentFixture<RoleCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
