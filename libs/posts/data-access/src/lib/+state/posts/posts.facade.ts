import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import * as PostsFeature from './posts.reducer';
import * as PostsSelectors from './posts.selectors';

@Injectable()
export class PostsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  public loading$=this.store.select(PostsSelectors.getPostsLoadingState)
  public posts$=this.store.select(PostsSelectors.getPosts);

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
 
  loadPosts()
  {
    this.store.dispatch(PostsActions.loadPosts())
  }
}
