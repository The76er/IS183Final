import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {

  users: Array<Object>;

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }

  async ngOnInit() {
    this.users = [];
    await this.getUsers();
  }

  async getUsers() {
    this.users = await this.userService.getUsers();
  }

  goToCreate() {
    this.router.navigate(['user-create']);
  }

  async deleteUser(id: string) {
    const resp = await this.userService.deleteUser(id);
    if (resp) {
      this.users = this.users.filter((user) => {
        return user['id'] !== id;
      });
    }
  }

}
