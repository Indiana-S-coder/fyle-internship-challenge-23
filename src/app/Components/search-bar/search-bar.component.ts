import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  username: string = ''; // declare username property
  @Output() searchUser = new EventEmitter<string>();

  constructor(private apiService: ApiService) { }

  onSearch() {
    this.apiService.getUser(this.username).subscribe({
      next: (user: any) => {
        console.log('User Details:', user);
        // Pass user details to parent or repository-list component
      },
      error: (error) => {
        console.error('Error fetching user:', error);
      }
  });
}
}
