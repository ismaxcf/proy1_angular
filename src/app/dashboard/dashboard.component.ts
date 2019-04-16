import { Component, OnInit } from '@angular/core';
import { User} from '../User';
import { UserService } from '../user.service';
import { Usuarios } from '../UserList';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = Usuarios.slice(1, 5));
  }
}