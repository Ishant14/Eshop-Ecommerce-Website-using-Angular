import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private route: Router) { }

    canActivate(route, state: RouterStateSnapshot) {
        return this.authService.user$.map(user => {
            if (user) return true;

            this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    }
}