import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataSkeletonComponent } from './user-data-skeleton.component';

describe('UserDataSkeletonComponent', () => {
  let component: UserDataSkeletonComponent;
  let fixture: ComponentFixture<UserDataSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDataSkeletonComponent]
    });
    fixture = TestBed.createComponent(UserDataSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
