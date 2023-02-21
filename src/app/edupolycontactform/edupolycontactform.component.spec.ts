import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdupolycontactformComponent } from './edupolycontactform.component';

describe('EdupolycontactformComponent', () => {
  let component: EdupolycontactformComponent;
  let fixture: ComponentFixture<EdupolycontactformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdupolycontactformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdupolycontactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
