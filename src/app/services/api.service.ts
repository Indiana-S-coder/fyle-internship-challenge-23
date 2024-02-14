import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, shareReplay, tap, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cache = new Map<string, Observable<any>>();

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    if(!this.cache.has(githubUsername)){
      const user$ = this.httpClient.get(`https://api.github.com/users/${githubUsername}`).pipe(
        catchError(() => {
          this.cache.delete(githubUsername);
          return of(null);
        }),
        shareReplay(1)
      );
      this.cache.set(githubUsername, user$);
    }
    return this.cache.get(githubUsername) || of(null);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  getRepos(githubUsername: string, page: number, perPage: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`, { params })
      .pipe(
        catchError((error: any) => {
          return throwError(() => error);
        })
      );
}
}
