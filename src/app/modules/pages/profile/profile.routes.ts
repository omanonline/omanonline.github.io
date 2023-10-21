import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { inject } from '@angular/core';
import { SetupService } from 'app/core/services/setup.service';
 
const profileResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const setupService = inject(SetupService);
    const router = inject(Router);
    setupService.current=(route.paramMap.get('username'));

};
export default [
    {
        path     : '',
        component: ProfileComponent,
        resolve  : {
            business: profileResolver,
        } 
        
    }
    
] as Routes;
