import { createAction, props } from '@ngrx/store';
import { User } from '../../users.service';

export const loadUsers = createAction('[Users Page] Load Users');

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);
