import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { Post, PostsService } from '../../posts.service';

import * as PostsActions from './posts.actions';

@Injectable()
export class PostsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      switchMap(()=>this.postsService.getPosts().pipe(
        map((posts:Post[])=>PostsActions.loadPostsSuccess({posts}),
        catchError((err)=>of(PostsActions.loadPostsFailure({error:err})))
        )
      ))
    )
  );

  constructor(private readonly actions$: Actions,private postsService:PostsService) {}
}
