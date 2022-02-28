import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Post, PostsService } from '../../posts.service';

import * as PostsActions from './posts.actions';

@Injectable()
export class PostsEffects {



  checkUsersInCacheFirst$ = createEffect(()=>
  this.actions$.pipe(
    ofType(PostsActions.checkPostsInCacheFirst),
    tap(()=>{
      const checkUsersInLocalStorage = localStorage.getItem('posts');
      if(checkUsersInLocalStorage && Array.isArray(JSON.parse(checkUsersInLocalStorage)))
      {
        const posts:Post[]=JSON.parse(checkUsersInLocalStorage) as Post[];
        this.store.dispatch(PostsActions.loadPostsSuccess({posts}));
      }
      else
      {
        this.store.dispatch(PostsActions.loadPostsFromAPI());
      }
    })
  ),{dispatch:false})


  loadPostsFromAPI$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPostsFromAPI),
      switchMap(()=>this.postsService.getPosts().pipe(
        tap((posts:Post[])=>localStorage.setItem('posts',JSON.stringify(posts))),
        map((posts:Post[])=>PostsActions.loadPostsSuccess({posts}),
        catchError((err)=>of(PostsActions.loadPostsFailure({error:err})))
        )
      ))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private postsService:PostsService,
    private store:Store

    ) {}
}
