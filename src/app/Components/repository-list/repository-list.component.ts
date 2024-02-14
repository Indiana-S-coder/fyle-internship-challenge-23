import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent {
  @Input() repositories: any[] = []; // Input user details from parent component
  totalRepos: number = 0;
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1; 

  constructor() {}
 
  get displayedRepos(): any[] {
    const startIndex = (this.currentPage - 1)* this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalPages);
    return this.repositories.slice(startIndex, endIndex);
  }

 onPageChange(page: number){
  this.currentPage = page;
  
 }
  // ngOnInit(): void {
  // }

  
}
