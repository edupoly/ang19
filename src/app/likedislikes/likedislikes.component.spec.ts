import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedislikesComponent } from './likedislikes.component';

describe('LikedislikesComponent', () => {
  let component: LikedislikesComponent;
  let fixture: ComponentFixture<LikedislikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedislikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedislikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
