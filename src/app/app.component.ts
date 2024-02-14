import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserDataComponent } from './Components/user-data/user-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  userData: any; 
  repositories: any[] = []
  // loading: false;
  constructor(
    private apiService: ApiService,
  ) {}

  // ngOnInit() {
  //   // this.apiService.getUser(this.username).subscribe(console.log);
  // }

  onSearch(username: string){
    // this.loading = true;
    console.log(username)
    this.apiService.getUser(username).subscribe({
      next: (user) => {this.userData = user, console.log(user)},
      // complete: () => this.userData = null
    } 
    );

    this.apiService.getRepos(username, 1, 100).subscribe(
      {
        next: (repos) => {
          this.repositories = repos
        }
      }
    )

    
  }
}
