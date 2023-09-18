import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { BusinessesComponent } from 'app/modules/pages/home/businesses/businesses.component';
import { HomeComponent } from 'app/modules/pages/home/home.component';
import { HomeService } from 'app/modules/pages/home/home.service';
import { JobsComponent } from './jobs/jobs.component';
import { ServicesComponent } from './services/services.component';
import { inject } from '@angular/core';

export default [
    {
        path: '',
        component: HomeComponent,
        resolve: {
            business: () => inject(HomeService).getBusinessByCategory('most-asked'),
        },
    },
    {
        path: 'businesses',
        component: BusinessesComponent,
        resolve: {
            business: () => inject(HomeService).getAllBusiness(),
        },
    },
    {
        path: 'jobs',
        component: JobsComponent,
        resolve: {
            jobs: () => inject(HomeService).getAllJobs(),
        },
    }
    ,
    {
        path: 'services',
        component: ServicesComponent,
        resolve: {
            services: () => inject(HomeService).getAllServices(),
        },
    }
] as Routes;
