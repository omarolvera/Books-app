import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypicodeService } from '../shared/shared';
import { IPost } from '../models/post';

@Component({
    selector: 'app-details',
    templateUrl: './post-detail.component.html'
  })
  export class PostDetailComponent implements OnInit {
    postInfo: IPost = {
        id: 0,
        userId: 0,
        title: '',
        body: ''
    };

    constructor(private typicodeService: TypicodeService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];

        this.typicodeService.getPost(id).subscribe((postInfo) => {
             this.postInfo = postInfo;
        });
      }

  }
