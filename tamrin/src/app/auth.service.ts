import { Injectable } from "@angular/core";

@Injectable ({
  providedIn: 'root'
})

export class AuthService {
  users: any[] = [
    {
      name :'zahra',
      username: 'amirpor',
      passowrd: '123'
    }
  ];

  login(username: string, passowrd: string):boolean {
    let user = this.users.filter(user =>user.username === username && user.passowrd === passowrd)
    if (user.length>0) {
      console.log(user);
    return true;
    }else {
      console.log(user);
      return false
    }
  }
}