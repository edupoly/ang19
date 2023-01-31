import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorchangedivComponent } from './colorchangediv.component';

describe('ColorchangedivComponent', () => {
  let component: ColorchangedivComponent;
  let fixture: ComponentFixture<ColorchangedivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorchangedivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorchangedivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
