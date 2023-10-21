import { LayoutComponent } from 'app/layout/layout.component';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { InitialDataResolver } from './app.resolvers';
import { inject } from '@angular/core';
import { SetupService } from './core/services/setup.service';
import { catchError } from 'rxjs';





// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    { path: ':username', pathMatch: 'full', redirectTo: ':username' },

    // Home routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver
        },
        children: [
            { path: '', loadChildren: () => import('app/modules/pages/home/home.routes') },
        ]
    },
     {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver
        },
        children: [
            { path: 'news', loadChildren: () => import('app/modules/pages/news/news.routes') },
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver
        },
        children: [
            { path: ':username', loadChildren: () => import('app/modules/pages/profile/profile.routes') },
        ]
    },
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: InitialDataResolver
        },
        children: [
            { path: ':username/about', loadChildren: () => import('app/modules/pages/profile/profile.routes') },
        ]
    },

];
