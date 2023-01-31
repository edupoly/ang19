import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImggalrotationComponent } from './imggalrotation.component';

describe('ImggalrotationComponent', () => {
  let component: ImggalrotationComponent;
  let fixture: ComponentFixture<ImggalrotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImggalrotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImggalrotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
