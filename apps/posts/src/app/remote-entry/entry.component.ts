import { Component } from '@angular/core';

@Component({
  selector: 'ngrx-in-nx-mfe-incremental-build-posts-entry',
  template: `<div class="remote-entry">
    <h2>posts's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
