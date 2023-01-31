import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightonofimagesComponent } from './lightonofimages.component';

describe('LightonofimagesComponent', () => {
  let component: LightonofimagesComponent;
  let fixture: ComponentFixture<LightonofimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightonofimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightonofimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
