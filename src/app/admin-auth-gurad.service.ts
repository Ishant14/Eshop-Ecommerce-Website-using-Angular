import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import { app } from 'firebase';

@Injectable()
export class AdminAuthGurad implements CanActivate {

  constructor(private auth: AuthService,private userService:UserService) { }

  canActivate() {
    console.log("Inside Admin Guard");
    return this.auth.appUser$
    .map(appUser=>appUser.isAdmin);
  }

}
