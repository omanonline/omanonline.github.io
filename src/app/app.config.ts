import { ApplicationConfig, isDevMode } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { PreloadAllModules, provideRouter, withInMemoryScrolling, withPreloading } from '@angular/router';

import { LuxonDateAdapter } from '@angular/material-luxon-adapter';
import { appRoutes } from 'app/app.routes';
import { mockApiServices } from 'app/mock-api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAuth } from 'app/core/auth/auth.provider';
import { provideHttpClient } from '@angular/common/http';
import { provideIcons } from 'app/core/icons/icons.provider';
import { provideOmanOnline } from '@omanonline/omanonline.provider';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
    providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter(appRoutes, withPreloading(PreloadAllModules), withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),
    // Material Date Adapter
    {
        provide: DateAdapter,
        useClass: LuxonDateAdapter,
    },
    {
        provide: MAT_DATE_FORMATS,
        useValue: {
            parse: {
                dateInput: 'D',
            },
            display: {
                dateInput: 'DDD',
                monthYearLabel: 'LLL yyyy',
                dateA11yLabel: 'DD',
                monthYearA11yLabel: 'LLLL yyyy',
            },
        },
    },
    // OmanOnline
    provideAuth(),
    provideIcons(),
    provideOmanOnline({
        mockApi: {
            delay: 0,
            services: mockApiServices,
        },
        omanonline: JSON.parse(localStorage.getItem('config')) ?? {
            layout: 'enterprise',
            scheme: 'dark',
            screens: {
                sm: '600px',
                md: '960px',
                lg: '1280px',
                xl: '1440px',
            },
            theme: 'theme-teal',
            themes: [
                {
                    id: 'theme-default',
                    name: 'Default',
                },
                {
                    id: 'theme-brand',
                    name: 'Brand',
                },
                {
                    id: 'theme-teal',
                    name: 'Teal',
                },
                {
                    id: 'theme-rose',
                    name: 'Rose',
                },
                {
                    id: 'theme-purple',
                    name: 'Purple',
                },
                {
                    id: 'theme-amber',
                    name: 'Amber',
                },
            ],
        },
    }),
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
],
};
