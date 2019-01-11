import { Component, OnInit, ViewChild } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookFormModalComponent } from '../bookformmodal/bookformmodal.component';
import { ToastaService } from 'ngx-toasta';

@Component({
  selector: 'app-book-admin',
  templateUrl: './book-admin.component.html',
  styleUrls: ['./book-admin.component.less']
})
export class BookAdminComponent implements OnInit {
  @ViewChild(BookFormModalComponent) trackForm;
  books: IBook[] = [];

  constructor(private bookService: BooksService,  private modalService: NgbModal,  private toastaService: ToastaService) { }

  ngOnInit() {
    this.loadBooks();
  }
  onNotify(message: boolean): void {
    if (message) {
      this.loadBooks();

    }
  }

  loadBooks() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }

  newBook() {
    const myModal = this.modalService.open(BookFormModalComponent);
    myModal.componentInstance.resetForm();
    myModal.componentInstance.isNewItem = true;
    myModal.componentInstance.books = this.books;
    myModal.result.then((result) => {
     
      this.loadBooks();
      this.toastaService.success({
          title: 'Notification',
          msg: 'New book has been added'
        });
    }, (reason) => {
      console.log(reason);
    });
  }

  delete(item: IBook, index: any) {
    this.bookService.deleteBook(item.ID).subscribe((response) => {
      this.toastaService.warning({
        title: 'Notification',
        msg: `Book ${item.ID} has been deleted}`
      });
    });
  }
  edit(item: IBook, index: any) {

    const myModalForm = this.modalService.open(BookFormModalComponent);
    myModalForm.componentInstance.resetForm();
    myModalForm.componentInstance.model = item;
    myModalForm.componentInstance.itemIndex = index;
    myModalForm.componentInstance.isNewItem = false;


    myModalForm.result.then((result) => {

      this.loadBooks();
           this.toastaService.success({
              title: 'Notification',
              msg: `Book ${item.ID} has been updated}`
            });
    }, (reason) => {
      console.log(reason);
    });


  }
}
