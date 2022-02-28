import { createAction, props } from '@ngrx/store';
import { Post } from '../../posts.service';
import { PostsEntity } from './posts.models';

export const checkPostsInCacheFirst = createAction('[Posts Page] Load Posts From Cache Else Make An API Call');

export const loadPostsFromAPI = createAction('[Post Effects] Make GET POSTS API Call');

export const loadPostsSuccess = createAction(
  '[Posts/API] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Posts/API] Load Posts Failure',
  props<{ error: any }>()
);
