import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { catchError, first, map, of, switchMap, tap } from 'rxjs';
import { User, UsersService } from '../../users.service';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';

export interface UserInLocalStorage{
  usersPresent:boolean;
  users?:User[];
}

@Injectable()
export class UsersEffects {

  checkUsersInCacheFirst$ = createEffect(()=>
  this.actions$.pipe(
    ofType(UsersActions.checkUsersInCacheElseMakeApiCall),
    tap(()=>{
      const checkUsersInLocalStorage = localStorage.getItem('users');
      if(checkUsersInLocalStorage && Array.isArray(JSON.parse(checkUsersInLocalStorage)))
      {
        const users:User[]=JSON.parse(checkUsersInLocalStorage) as User[];
        this.store.dispatch(UsersActions.loadUsersSuccess({users}))
      }
      else
      {
        this.store.dispatch(UsersActions.makeUsersApiCall());
      }
    })
  ),{dispatch:false})

  makeUsersApiCall$= createEffect(()=>
  this.actions$.pipe(
    ofType(UsersActions.makeUsersApiCall),
    switchMap(()=>
    this.userService.getUsers().pipe(
      tap((users:User[])=>{
        localStorage.setItem('users',JSON.stringify(users))
      }),
      map((users:User[])=>UsersActions.loadUsersSuccess({users})),
      catchError((error)=>of(UsersActions.loadUsersFailure({error})))
    ))
  ))

  constructor(
    private readonly actions$: Actions,
    private userService:UsersService,
    private store:Store
    ) {}
}
