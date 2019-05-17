import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Object;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    const resp = await this.userService.getUserById(this.activatedRoute.snapshot.params['id']);
    this.user = resp || [];
  }

  async updateUser(user: any) {
    const userID = user.id;
    const resp = await this.userService.updateUser(userID, user);
    if (resp) {
      this.router.navigate(['users']);
    }
  }

}
