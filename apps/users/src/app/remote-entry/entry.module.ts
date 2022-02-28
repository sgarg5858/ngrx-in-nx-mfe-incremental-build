import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren:()=>import('@ngrx-in-nx-mfe-incremental-build/users/feature').then(m=>m.UsersFeatureModule),
      },
    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
