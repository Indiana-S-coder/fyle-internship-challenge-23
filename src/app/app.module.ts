import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { RepositoryListComponent } from './Components/repository-list/repository-list.component';
import { UserDataComponent } from './Components/user-data/user-data.component';
import { UserDataSkeletonComponent } from './Components/user-data-skeleton/user-data-skeleton.component';
import { RepoListSkeletonComponent } from './Components/repo-list-skeleton/repo-list-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RepositoryListComponent,
    UserDataComponent,
    UserDataSkeletonComponent,
    RepoListSkeletonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
