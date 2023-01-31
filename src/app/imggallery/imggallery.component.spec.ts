import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImggalleryComponent } from './imggallery.component';

describe('ImggalleryComponent', () => {
  let component: ImggalleryComponent;
  let fixture: ComponentFixture<ImggalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImggalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImggalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
