import { Component, OnInit } from '@angular/core';
import { UsersFacade } from '@ngrx-in-nx-mfe-incremental-build/users/data-access';

@Component({
  selector: 'ngrx-in-nx-mfe-incremental-build-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss']
})
export class UsersContainerComponent implements OnInit {

  constructor(public usersFacade:UsersFacade) { }

  ngOnInit(): void {
    this.usersFacade.loadUsers();
  }

}
