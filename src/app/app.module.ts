import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ToastaModule} from 'ngx-toasta';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { TypicodeService } from './shared/shared';
import { PostDetailComponent } from './post/post-detail.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookAdminComponent } from './books/book-admin/book-admin.component';
import { BookFormModalComponent } from './books/bookformmodal/bookformmodal.component';

@NgModule({
   declarations: [
      AppComponent,
      PostComponent,
      PostDetailComponent,
      BooksComponent,
      BookDetailsComponent,
      BookAdminComponent,
      BookFormModalComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      HttpClientModule,
      NgbModule.forRoot(),
      ToastaModule.forRoot()
   ],
   providers: [
      TypicodeService
   ],
   entryComponents: [
      BookFormModalComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
