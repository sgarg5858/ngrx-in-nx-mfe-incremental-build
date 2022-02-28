import { createAction, props } from '@ngrx/store';
import { User } from '../../users.service';

export const checkUsersInCacheElseMakeApiCall = createAction('[Users Page] Load Users Check Cache First');

export const makeUsersApiCall = createAction('[Users Effects] Load Users From API')

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);
