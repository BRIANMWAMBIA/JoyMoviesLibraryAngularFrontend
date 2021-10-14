import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  @Output() userLogged: EventEmitter<any> = new EventEmitter();
  constructor() { }
  set_user_prof(user: object) {
    this.userLogged.emit(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  get_user_prof() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  remove_user(){
    this.userLogged.emit('');
    return localStorage.removeItem("user");
  }
}
