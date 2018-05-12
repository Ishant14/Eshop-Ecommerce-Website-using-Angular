import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AppUser } from './models/app-user';
import { UserService } from './user.service';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private angularFireAuth:AngularFireAuth,private route : ActivatedRoute) { 
    this.user$ = angularFireAuth.authState;
    
  }
  
    login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl',returnUrl); 
    this.angularFireAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider);
  }

  logout(){
    this.angularFireAuth.auth.signOut();
  }

  get appUser$() : Observable<AppUser>{
    return this.user$
    .switchMap(user => {
      if (user) return this.userService.get(user.uid);
      return Observable.of(null);
    }
    );
  }

}
