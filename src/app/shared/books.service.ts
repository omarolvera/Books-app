import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { IBook } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseUrl = 'https://fakerestapi.azurewebsites.net/api/Books';
  constructor(private http: HttpClient) {}


 

  getBooks(): Observable<any> {
    return this.http.get<IBook>(`${this.baseUrl}`).pipe(
      map(res => res),
      catchError(this.handleError('Get books', this.baseUrl))
    );
  }

  getBook(bookId: any): Observable<any> {
    return this.http.get<IBook>(`${this.baseUrl}/${bookId}`).pipe(
      map(res => res),
      catchError(this.handleError('Get book', this.baseUrl))
    );
  }

  addBook(book: IBook): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    const data = JSON.stringify(book);
    return this.http.post(`${this.baseUrl}`, data, httpOptions)
    .pipe(
        map((res) => res),
        catchError(this.handleError('Add book', this.baseUrl))
    );
  }

  updateBook(book: IBook) {
    const data = JSON.stringify(book);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.put(`${this.baseUrl}/${book.ID}`, data, httpOptions)
    .pipe(
        map((response) => response),
        catchError(this.handleError('Update book', this.baseUrl))
    );
  }

  deleteBook(bookId: any) {
    return this.http.delete(`${this.baseUrl}/${bookId}`).pipe(
      map(res => res),
      catchError(this.handleError('Delete book', this.baseUrl))
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
