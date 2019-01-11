import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { IPost } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<IPost>(`${this.baseUrl}posts`).pipe(
      map(res => res),
      catchError(this.handleError('Get posts', this.baseUrl))
    );
  }

  getPost(id: any): Observable<any> {
    return this.http.get<IPost>(`${this.baseUrl}posts/${id}`).pipe(
      map(res => res),
      catchError(this.handleError('Get post', this.baseUrl))
    );
  }

  getComments(postId: number): Observable<any> {
    return this.http
      .get<IPost>(`${this.baseUrl}comments?postId=${postId}`)
      .pipe(
        map(res => res),
        catchError(this.handleError('Get comments', this.baseUrl))
      );
  }

  addComment(comment: any) {
    const data = JSON.stringify(comment);
    return this.http.put(`${this.baseUrl}posts`, data).pipe(
      map(res => res),
      catchError(this.handleError('Add comment', this.baseUrl))
    );
  }

  private handleError(method: String, URL: string): any {
    return (err: any) => {
      const errMsg = `error in ${method}() retrieving ${URL}`;
      console.log(`${errMsg}:`, err);
      if (err instanceof HttpErrorResponse) {
        console.log(`status: ${err.status}, ${err.statusText}`);
      }
      return Observable.throw(errMsg);
    };
  }
}
