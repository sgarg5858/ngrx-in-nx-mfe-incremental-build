import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USERS_FEATURE_KEY, UsersState } from './users.reducer';

// Lookup the 'Users' feature state managed by NgRx
export const getUsersState = createFeatureSelector<UsersState>(USERS_FEATURE_KEY);


export const getUsers = createSelector(
  getUsersState,
  (state: UsersState) => state.users
);

export const getUsersLoadingStatus= createSelector(
  getUsersState,
  (state: UsersState) => state.loading
);


export const getUsersErrorStatus= createSelector(
  getUsersState,
  (state: UsersState) => state.error
);
