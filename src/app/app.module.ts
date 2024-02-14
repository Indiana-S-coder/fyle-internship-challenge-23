import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { RepositoryListComponent } from './Components/repository-list/repository-list.component';
import { UserDataComponent } from './Components/user-data/user-data.component';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { UserDataSkeletonComponent } from './user-data-skeleton/user-data-skeleton.component';
import { RepoListSkeletonComponent } from './repo-list-skeleton/repo-list-skeleton.component';

const routes: Routes = [
  {
    path: '', component: SearchBarComponent
  },
  {
    path: 'user/:username', component: UserDataComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RepositoryListComponent,
    UserDataComponent,
    PaginationComponent,
    UserDataSkeletonComponent,
    RepoListSkeletonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
