// components/search-bar/search-bar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { debounceTime, distinctUntilChanged, switchMap, catchError, map } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchUsername = new EventEmitter<string>();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      username: [''],
    })
   }


  searchUser() {
    const username = this.searchForm.value.username;
    if(username){
      this.searchUsername.emit(username);
    }
  }
}

