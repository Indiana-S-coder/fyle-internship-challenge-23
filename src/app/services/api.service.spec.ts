import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user data', () => {
    const mockUserData = { id: 123, login: 'mockuser' };
    const username = 'mockuser';

    service.getUser(username).subscribe(user => {
      expect(user).toEqual(mockUserData);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${username}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUserData);
  });

  it('should fetch user repositories', () => {
    const mockReposData = [{ id: 1, name: 'repo1' }, { id: 2, name: 'repo2' }];
    const username = 'mockuser';
    const page = 1;
    const perPage = 10;

    service.getUserRepos(username, page, perPage).subscribe(repos => {
      expect(repos).toEqual(mockReposData);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockReposData);
  });

  it('should handle errors properly when fetching user data', () => {
    const errorMessage = 'Error: 404';
    const status = 404;
    const username = 'nonexistentuser';

    service.getUser(username).subscribe({
      next: () => {},
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error).toContain(errorMessage);
      }, 
    }
      
    );

    const req = httpMock.expectOne(`https://api.github.com/users/${username}`);
    expect(req.request.method).toBe('GET');
    req.flush(errorMessage, { status, statusText: 'Not Found' });
  });

  it('should handle errors properly when fetching user repositories', () => {
    const errorMessage = 'Error: 404';
    const status = 404;
    const username = 'nonexistentuser';
    const page = 1;
    const perPage = 10;

    service.getUserRepos(username, page, perPage).subscribe({
      next: () => {},
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error).toContain(errorMessage);
      }
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`);
    expect(req.request.method).toBe('GET');
    req.flush(errorMessage, { status, statusText: 'Not Found' });
  });
});
