import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
books: IBook[] = [];
  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

}
