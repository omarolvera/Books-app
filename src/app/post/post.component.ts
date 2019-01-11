import { Component, OnInit } from '@angular/core';
import { TypicodeService } from '../shared/shared';
import { IPost } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  postList: IPost[] = [];

  constructor(private typiCodeService: TypicodeService) { }

  ngOnInit() {
    this.typiCodeService.getPosts().subscribe((response) => {
      this.postList = response;
    });
  }

}
