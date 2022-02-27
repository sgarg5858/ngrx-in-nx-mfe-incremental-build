import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { Post } from '../../posts.service';

import * as PostsActions from './posts.actions';
import { PostsEntity } from './posts.models';

export const POSTS_FEATURE_KEY = 'posts';

export interface PostsState {
  posts:Post[],
  loading:boolean,
  error:string|undefined
}

export const initialState: PostsState ={
  
  loading:true,
  error:undefined,
  posts:[]
}

const postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPostsSuccess, (state, { posts }) =>
    {
      return {...state,posts,loading:false}
    }
  ),
  on(PostsActions.loadPostsFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: PostsState | undefined, action: Action) {
  return postsReducer(state, action);
}
