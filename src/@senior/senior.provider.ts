import { APP_INITIALIZER, ENVIRONMENT_INITIALIZER, EnvironmentProviders, Provider, importProvidersFrom, inject } from '@angular/core';
import { SENIOR_MOCK_API_DEFAULT_DELAY, mockApiInterceptor } from '@senior/lib/mock-api';
import { SeniorLoadingService, seniorLoadingInterceptor } from '@senior/services/loading';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { SENIOR_CONFIG } from '@senior/services/config/config.constants';
import { SeniorConfig } from '@senior/services/config';
import { SeniorConfirmationService } from '@senior/services/confirmation';
import { SeniorMediaWatcherService } from '@senior/services/media-watcher';
import { SeniorPlatformService } from '@senior/services/platform';
import { SeniorSplashScreenService } from '@senior/services/splash-screen';
import { SeniorUtilsService } from '@senior/services/utils';

export type SeniorProviderConfig = {
    mockApi?: {
        delay?: number;
        services?: any[];
    },
    senior?: SeniorConfig
}

/**
 * Senior provider
 */
export const provideSenior = (config: SeniorProviderConfig): Array<Provider | EnvironmentProviders> =>
{
    // Base providers
    const providers: Array<Provider | EnvironmentProviders> = [
        {
            // Disable 'theme' sanity check
            provide : MATERIAL_SANITY_CHECKS,
            useValue: {
                doctype: true,
                theme  : false,
                version: true,
            },
        },
        {
            // Use the 'fill' appearance on Angular Material form fields by default
            provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: {
                appearance: 'fill',
            },
        },
        {
            provide : SENIOR_MOCK_API_DEFAULT_DELAY,
            useValue: config?.mockApi?.delay ?? 0,
        },
        {
            provide : SENIOR_CONFIG,
            useValue: config?.senior ?? {},
        },

        importProvidersFrom(MatDialogModule),
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(SeniorConfirmationService),
            multi   : true,
        },

        provideHttpClient(withInterceptors([seniorLoadingInterceptor])),
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(SeniorLoadingService),
            multi   : true,
        },

        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(SeniorMediaWatcherService),
            multi   : true,
        },
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(SeniorPlatformService),
            multi   : true,
        },
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(SeniorSplashScreenService),
            multi   : true,
        },
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(SeniorUtilsService),
            multi   : true,
        },
    ];

    // Mock Api services
    if ( config?.mockApi?.services )
    {
        providers.push(
            provideHttpClient(withInterceptors([mockApiInterceptor])),
            {
                provide   : APP_INITIALIZER,
                deps      : [...config.mockApi.services],
                useFactory: () => (): any => null,
                multi     : true,
            },
        );
    }

    // Return the providers
    return providers;
};
