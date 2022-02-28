import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../../users.service';

import * as UsersActions from './users.actions';
import { UsersEntity } from './users.models';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState  {
  users:User[]; // which Users record has been selected
  loading: boolean; // has the Users list been loaded
  error: string | null; // last known error (if any)
}


export const initialState: UsersState = {
  // set initial required properties
  loading: true,
  users:[],
  error:null
};

const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsersSuccess, (state, { users }) =>
   {
     return {
       ...state,
       users:users,
       loading:false
     }
   }
  ),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state,loading:false, error }))
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
