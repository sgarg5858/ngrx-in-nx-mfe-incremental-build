import { Component, OnInit } from '@angular/core';
import { PostsFacade } from '@ngrx-in-nx-mfe-incremental-build/posts/data-access';

@Component({
  selector: 'ngrx-in-nx-mfe-incremental-build-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.scss']
})
export class PostsContainerComponent implements OnInit {

  constructor(public postsFacade:PostsFacade) { }

  ngOnInit(): void {
    this.postsFacade.loadPosts();
  }

}
