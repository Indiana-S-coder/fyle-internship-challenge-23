import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { RepositoryListComponent } from './Components/repository-list/repository-list.component';
import { UserDataComponent } from './Components/user-data/user-data.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    RepositoryListComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
