import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post/post-detail.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookAdminComponent } from './books/book-admin/book-admin.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: 'details/:id',
    component: PostDetailComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'book-details/:id',
    component: BookDetailsComponent
  },
  {
    path: 'book-admin',
    component: BookAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
