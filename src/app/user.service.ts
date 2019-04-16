import { Injectable } from '@angular/core';
import {User} from './User';
import { Usuarios } from './UserList';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers(): Observable<User[]> {
      this.messageService.add('UserService: fetched users');
      return of(Usuarios);
  }

  addUser(user:User){
    Usuarios.push(user);
    this.messageService.add('User '+ user.Name + ' added');
  }
  constructor(private messageService: MessageService) { }
}
