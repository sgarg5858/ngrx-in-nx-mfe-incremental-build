import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersContainerComponent } from './users-container/users-container.component';
import {UsersDataAccessModule} from '@ngrx-in-nx-mfe-incremental-build/users/data-access';
import {RouterModule} from '@angular/router'
@NgModule({
  imports: [
    CommonModule,
    UsersDataAccessModule,
    RouterModule.forChild([
      {
        path:'',
        component:UsersContainerComponent
      }
    ])
  ],
  declarations: [
    UsersContainerComponent
  ],
})
export class UsersFeatureModule {}
