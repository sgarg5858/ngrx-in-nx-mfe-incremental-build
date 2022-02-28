import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, map, of, switchMap } from 'rxjs';
import { User, UsersService } from '../../users.service';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';

@Injectable()
export class UsersEffects {
  loadUsers$ = createEffect(()=>
  this.actions$.pipe(
    ofType(UsersActions.loadUsers),
    switchMap(()=>this.userService.getUsers().pipe(
      map((users:User[])=>UsersActions.loadUsersSuccess({users})),
      catchError((error)=>of(UsersActions.loadUsersFailure({error})))
    ))
  ))

  constructor(private readonly actions$: Actions,private userService:UsersService) {}
}
