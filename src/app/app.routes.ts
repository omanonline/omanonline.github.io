import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/home'
    { path: '', pathMatch: 'full', redirectTo: 'home' },

    // Redirect signed-in user to the '/home'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'home' },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.routes') },
            { path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.routes') },
            { path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.routes') },
            { path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.routes') },
            { path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.routes') }
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.routes') },
            { path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.routes') }
        ]
    },

    // Landing routes
    {
        path: '',
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'landing', loadChildren: () => import('app/modules/landing/home/home.routes') },
        ]
    },


    // Home routes
    {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
            { path: 'home', loadChildren: () => import('app/modules/pages/home/home.routes') },
        ]
    },
     // ICO routes
     {
        path: '',
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
            { path: 'ico', loadChildren: () => import('app/modules/pages/ico/ico.routes') },
        ]
    }

];
