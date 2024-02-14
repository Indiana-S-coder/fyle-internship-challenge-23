import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnChanges{
  @Input() repositories: any[] = []; // Your repository data
  @Input() loading: boolean = false; // Loading flag
  @Input() error: boolean = false;   // Error flag

  currentPage: number = 1;
  itemsPerPage: number = 10; // Display six repositories per page

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 6000)
  }

 ngOnChanges(): void {
  this.displayedRepositories;
}

  get totalItems(): number {
    return this.repositories.length;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  onPageSizeChange(event: Event){
    const selectedPageSize = (event.target as HTMLSelectElement)?.value;
    if(!isNaN(Number(selectedPageSize))){
      this.itemsPerPage = Math.min(100, Number(selectedPageSize));
      this.currentPage = 1;
      this.displayedRepositories;
    }
  }

  get displayedRepositories(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalItems);
    return this.repositories.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goToPage(page: number) {
    
  console.log('totalPages:', this.totalPages);
  console.log('page:', page);
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      console.log('Current page:', this.currentPage);
    }
  }

}