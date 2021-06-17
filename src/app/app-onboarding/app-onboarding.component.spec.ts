import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOnboardingComponent } from './app-onboarding.component';

describe('AppOnboardingComponent', () => {
  let component: AppOnboardingComponent;
  let fixture: ComponentFixture<AppOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
