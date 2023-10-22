import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { BusinessesComponent } from 'app/modules/pages/home/businesses/businesses.component';
import { HomeComponent } from 'app/modules/pages/home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { inject } from '@angular/core';

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
        path: 'jobs',
        component: JobsComponent
    }
    ,
    {
        path: 'services',
        component: ServicesComponent
    }
] as Routes;
