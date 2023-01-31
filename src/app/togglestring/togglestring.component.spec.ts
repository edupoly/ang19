import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglestringComponent } from './togglestring.component';

describe('TogglestringComponent', () => {
  let component: TogglestringComponent;
  let fixture: ComponentFixture<TogglestringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglestringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglestringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
