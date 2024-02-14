import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoryListComponent } from './repository-list.component';

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial values', () => {
    expect(component.repositories).toEqual([]);
    expect(component.loading).toBe(false);
    expect(component.error).toBe(false);
    expect(component.currentPage).toBe(1);
    expect(component.itemsPerPage).toBe(10);
  });

  it('should calculate total items', () => {
    component.repositories = [1, 2, 3, 4, 5];
    expect(component.totalItems).toBe(5);
  });

  it('should calculate total pages', () => {
    component.repositories = new Array(25); // 25 items
    expect(component.totalPages).toBe(3);
  });

  it('should calculate pages array', () => {
    component.repositories = new Array(25); // 25 items
    expect(component.pages).toEqual([1, 2, 3]);
  });

  it('should handle page size change', () => {
    const event = { target: { value: '20' } };
    component.onPageSizeChange(event as any);
    expect(component.itemsPerPage).toBe(20);
    expect(component.currentPage).toBe(1);
  });

  it('should calculate displayed repositories', () => {
    component.repositories = [1, 2, 3, 4, 5];
    component.currentPage = 2;
    component.itemsPerPage = 2;
    expect(component.displayedRepositories).toEqual([3, 4]);
  });

  it('should navigate to previous page', () => {
    component.currentPage = 3;
    component.previousPage();
    expect(component.currentPage).toBe(2);
  });

  it('should navigate to next page', () => {
    component.currentPage = 2;
    component.itemsPerPage = 10;
    component.repositories = new Array(30); 
    component.nextPage();
    expect(component.currentPage).toBe(3);
  });

  it('should go to specific page', () => {
    component.goToPage(3);
    console.log('currentPage after goToPage:', component.currentPage);
    expect(component.currentPage).toBe(3);
  });
});


