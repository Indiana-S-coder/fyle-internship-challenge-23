import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { UserDataComponent } from './Components/user-data/user-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  userData: any; 
  // loading: false;
  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit() {
    // this.apiService.getUser(this.username).subscribe(console.log);
  }

  onSearch(username: string){
    // this.loading = true;
    this.apiService.getUser(username).subscribe({
      next: (user) => this.userData = user,
      complete: () => this.userData = null
    }
      // (user) => {
      //   this.userData = user;
      //   // this.loading = false;
      // },
      // () => {
      //   this.userData = null;
      //   // this.loading = false;
      // }
    );

    
  }
}
