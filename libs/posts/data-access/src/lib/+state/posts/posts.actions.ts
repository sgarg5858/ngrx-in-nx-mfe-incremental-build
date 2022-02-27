import { createAction, props } from '@ngrx/store';
import { Post } from '../../posts.service';
import { PostsEntity } from './posts.models';

export const loadPosts = createAction('[Posts Page] Load Posts');

export const loadPostsSuccess = createAction(
  '[Posts/API] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Posts/API] Load Posts Failure',
  props<{ error: any }>()
);
