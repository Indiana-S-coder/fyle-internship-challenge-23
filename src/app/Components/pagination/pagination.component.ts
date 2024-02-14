import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 10;
  @Input() totalItems: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();



  onPageChange(page : number){
    this.pageChange.emit(page);
  }
 
  calculateTotalPages(){
    return Math.ceil(this.totalItems / this.pageSize);
  }

  getPageNumbers(): number[] {
    const totalPages = this.calculateTotalPages();
    return Array.from({length: totalPages}, (_, index) => index + 1);
  }
  

}
