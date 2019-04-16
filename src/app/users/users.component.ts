import { Component, OnInit, defineInjectable } from '@angular/core';
import {User} from '../User';
import {UserService} from '../user.service';
import { Usuarios } from '../UserList';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;
  formNewUser: boolean;
  onSelect(user:User):void {
    this.selectedUser = user;
    console.log("Usuario click: "+user.Name);
    console.log("Selected User Guardado " + this.selectedUser.Name);
    this.messageService.add("Usuario click: "+user.Name);
  }
  constructor(private userService: UserService, private messageService: MessageService) { }

  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = Usuarios);
  }
  ngOnInit() {
    this.getUsers();
  }
  showFormNU(){
    this.formNewUser=true;
  }
  addUser(newUserName, newUserDni, newUserAge){
    //console.log(newUserName.value);
    //console.log(newUserDni.value);
    //console.log(newUserAge.value)
    let user = new User(newUserName.value, newUserDni.value, newUserAge.value);
    console.log(user);
    this.userService.addUser(user);
    this.formNewUser=false;
    newUserName.value='';
    newUserDni.value='';
    newUserAge.value='';
  }

}
