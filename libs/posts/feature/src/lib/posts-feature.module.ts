import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PostsDataAccessModule} from '@ngrx-in-nx-mfe-incremental-build/posts/data-access';
import { PostsContainerComponent } from './posts-container/posts-container.component'
@NgModule({
  imports: [
    CommonModule,
    PostsDataAccessModule,
    RouterModule.forChild([
      {
        path:'',
        component:PostsContainerComponent
      }
    ])

  ],
  declarations: [
    PostsContainerComponent
  ],
})
export class PostsFeatureModule {}
