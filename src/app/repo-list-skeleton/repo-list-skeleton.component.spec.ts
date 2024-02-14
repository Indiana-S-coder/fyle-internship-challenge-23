import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoListSkeletonComponent } from './repo-list-skeleton.component';

describe('RepoListSkeletonComponent', () => {
  let component: RepoListSkeletonComponent;
  let fixture: ComponentFixture<RepoListSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoListSkeletonComponent]
    });
    fixture = TestBed.createComponent(RepoListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
