import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  userData: any; 
  repositories: any[] = []
  loading: boolean = false;
  error: boolean = false;

  constructor(
    private apiService: ApiService,
  ) {}


  onSearch(username: string){
    this.loading = true;
    console.log(username)
    this.apiService.getUser(username).subscribe({
      next: (user) => {
        this.userData = user;
        console.log(user)
      },
      error: () => {
        this.userData = null;
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });


    this.apiService.getUserRepos(username, 1, 1000).subscribe({
      next: (repos) => {
        this.repositories = repos;
        console.log(repos)
      },
      error: () => {
        this.repositories = [];
        this.error = true;
      },
      complete: () => {
        this.loading = false;
      }
    }
    );
    
  }
}
