import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, shareReplay, throwError, of } from 'rxjs';

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
        catchError(this.handleError),
        shareReplay(1)
      );
      this.cache.set(githubUsername, user$);
    }
    return this.cache.get(githubUsername) || of(null);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  getUserRepos(githubUsername: string, page: number, perPage: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.httpClient.get(`https://api.github.com/users/${githubUsername}/repos`, { params })
      .pipe(
        catchError(this.handleError)
      );
}

private handleError(error: HttpErrorResponse) {
  let errorMessage = `Error: ${error.status}`;
  if (error.error instanceof ErrorEvent) {
    errorMessage = `Error: ${error.message}`;
  }
  console.error(errorMessage);
  return throwError(() => errorMessage);
}
}
