import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdupolymapComponent } from './edupolymap.component';

describe('EdupolymapComponent', () => {
  let component: EdupolymapComponent;
  let fixture: ComponentFixture<EdupolymapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdupolymapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdupolymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
