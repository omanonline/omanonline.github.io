import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { BusinessesComponent } from 'app/modules/pages/home/businesses/businesses.component';
import { HomeComponent } from 'app/modules/pages/home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { inject } from '@angular/core';
import { FavoriteComponent } from './businesses/favorite/favorite.component';

export default [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'businesses',
        component: BusinessesComponent
    },
    {
        path: 'businesses/favorite',
        component: FavoriteComponent
    },
    {
        path: 'jobs',
        component: JobsComponent
    }
    ,
    {
        path: 'services',
        component: ServicesComponent
    }
] as Routes;
