import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewContainerRef
} from '@angular/core';
import { IBook } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';
import { NgAnimateScrollService } from 'ng-animate-scroll';
import { ToastaService } from 'ngx-toasta';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bookformmodal',
  templateUrl: './bookformmodal.component.html',
  styleUrls: ['./bookformmodal.component.less']
})
export class BookFormModalComponent implements OnInit {
  @Input() books: IBook[];
  @Input() isNewItem = false;
  @Input() model: IBook = {
    ID: 0,
    Title: '',
    Description: '',
    Excerpt: '',
    PageCount: 0,
    PublishDate: ''
  };
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private bookService: BooksService,
    private animateScrollService: NgAnimateScrollService,
    private toastaService: ToastaService,
    private modal: NgbActiveModal
  ) {}

  ngOnInit() {
   
  }
  addBook(isValid: boolean) {
    if (isValid) {
      if (this.isNewItem) {
        const index = this.books.length + 1;
        this.model.ID = index;
      }

      this.bookService.addBook(this.model).subscribe(response => {
        console.log(response);
        this.resetForm();
        this.notify.emit(true);
        this.isNewItem = false;
        this.modal.close();
      });
    }
  }

  updateBook(isValid: boolean) {
    if (isValid) {
      this.bookService.updateBook(this.model)
        .subscribe(
          response => {
            console.log(response);
            this.resetForm();
            this.notify.emit(true);
            this.isNewItem = false;
            this.modal.close();
          },
          () => {
            this.resetForm();
            this.isNewItem = false;
            this.modal.close();
          }
        );
    }
  }

  resetForm() {
    this.model = {
      ID: 0,
      Title: '',
      Description: '',
      Excerpt: '',
      PageCount: 0,
      PublishDate: ''
    };
    this.isNewItem = false;
  }

  cancelForm() {
    this.modal.dismiss();
    this.resetForm();
  }
}
