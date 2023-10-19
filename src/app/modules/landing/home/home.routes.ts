import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { SetupService } from 'app/core/services/setup.service';
import { LandingHomeComponent } from 'app/modules/landing/home/home.component';
import { catchError, throwError } from 'rxjs';

 



const profileResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const setupService = inject(SetupService);
    const router = inject(Router);
    setupService.current=(route.paramMap.get('username'));

};

export default [
    {
        path     : '',
        component: LandingHomeComponent,
        resolve  : {
            business: profileResolver,
        } 
    },
] as Routes;
