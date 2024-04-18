import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationNumberAuthentificationComponent } from './registration-number-authentification.component';

describe('RegistrationNumberAuthentificationComponent', () => {
  let component: RegistrationNumberAuthentificationComponent;
  let fixture: ComponentFixture<RegistrationNumberAuthentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationNumberAuthentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationNumberAuthentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
