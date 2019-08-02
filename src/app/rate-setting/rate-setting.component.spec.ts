import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateSettingComponent } from './rate-setting.component';

describe('RateSettingComponent', () => {
  let component: RateSettingComponent;
  let fixture: ComponentFixture<RateSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
