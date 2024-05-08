import { APP_INITIALIZER, ENVIRONMENT_INITIALIZER, EnvironmentProviders, Provider, importProvidersFrom, inject } from '@angular/core';
import { OMANONLINE_MOCK_API_DEFAULT_DELAY, ApiInterceptor } from '@omanonline/lib/api';
import { OmanOnlineLoadingService, omanonlineLoadingInterceptor } from '@omanonline/services/loading';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { OMANONLINE_CONFIG } from '@omanonline/services/config/config.constants';
import { OmanOnlineConfig } from '@omanonline/services/config';
import { OmanOnlineConfirmationService } from '@omanonline/services/confirmation';
import { OmanOnlineMediaWatcherService } from '@omanonline/services/media-watcher';
import { OmanOnlinePlatformService } from '@omanonline/services/platform';
import { OmanOnlineSplashScreenService } from '@omanonline/services/splash-screen';
import { OmanOnlineUtilsService } from '@omanonline/services/utils';

export type OmanOnlineProviderConfig = {
    Api?: {
        delay?: number;
        services?: any[];
    },
    omanonline?: OmanOnlineConfig
}

/**
 * OmanOnline provider
 */
export const provideOmanOnline = (config: OmanOnlineProviderConfig): Array<Provider | EnvironmentProviders> =>
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
            provide : OMANONLINE_MOCK_API_DEFAULT_DELAY,
            useValue: config?.Api?.delay ?? 0,
        },
        {
            provide : OMANONLINE_CONFIG,
            useValue: config?.omanonline ?? {},
        },

        importProvidersFrom(MatDialogModule),
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(OmanOnlineConfirmationService),
            multi   : true,
        },

        provideHttpClient(withInterceptors([omanonlineLoadingInterceptor])),
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(OmanOnlineLoadingService),
            multi   : true,
        },

        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(OmanOnlineMediaWatcherService),
            multi   : true,
        },
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(OmanOnlinePlatformService),
            multi   : true,
        },
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(OmanOnlineSplashScreenService),
            multi   : true,
        },
        {
            provide : ENVIRONMENT_INITIALIZER,
            useValue: () => inject(OmanOnlineUtilsService),
            multi   : true,
        },
    ];

    //  Api services
    if ( config?.Api?.services )
    {
        providers.push(
            provideHttpClient(withInterceptors([ApiInterceptor])),
            {
                provide   : APP_INITIALIZER,
                deps      : [...config.Api.services],
                useFactory: () => (): any => null,
                multi     : true,
            },
        );
    }

    // Return the providers
    return providers;
};
