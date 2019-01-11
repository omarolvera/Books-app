import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less']
})
export class BookDetailsComponent implements OnInit {

  book: IBook = { Title: '', ID: 0, Description: '', Excerpt: '', PageCount: 0, PublishDate: ''};
  constructor(private bookService: BooksService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];

    this.bookService.getBook(id).subscribe((data) => {
      this.book = data;
    });
  }

}
