import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent {
  @Input() user: any; // Input user details from parent component

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {
  }

  loadRepositories() {
    this.apiService.getRepos(this.user.login, 1, 10).subscribe(
      (repos: any[]) => {
        console.log('Repositories:', repos);
        // Display repositories
      },
      (error) => {
        console.error('Error fetching repositories:', error);
      }
    );
  }
}
