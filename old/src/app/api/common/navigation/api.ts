import { compactNavigation, defaultNavigation, futuristicNavigation, horizontalNavigation } from 'app/api/common/navigation/data';

import { Injectable } from '@angular/core';
import { OmanOnlineApiService } from '@omanonline/lib/api';
import { OmanOnlineNavigationItem } from '@omanonline/components/navigation';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class NavigationApi
{
    private readonly _compactNavigation: OmanOnlineNavigationItem[] = compactNavigation;
    private readonly _defaultNavigation: OmanOnlineNavigationItem[] = defaultNavigation;
    private readonly _futuristicNavigation: OmanOnlineNavigationItem[] = futuristicNavigation;
    private readonly _horizontalNavigation: OmanOnlineNavigationItem[] = horizontalNavigation;

    /**
     * Constructor
     */
    constructor(private _omanonlineApiService: OmanOnlineApiService)
    {
        // Register  API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register  API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Navigation - GET
        // -----------------------------------------------------------------------------------------------------
        this._omanonlineApiService
            .onGet('api/common/navigation')
            .reply(() =>
            {
                // Fill compact navigation children using the default navigation
                this._compactNavigation.forEach((compactNavItem) =>
                {
                    this._defaultNavigation.forEach((defaultNavItem) =>
                    {
                        if ( defaultNavItem.id === compactNavItem.id )
                        {
                            compactNavItem.children = cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                // Fill futuristic navigation children using the default navigation
                this._futuristicNavigation.forEach((futuristicNavItem) =>
                {
                    this._defaultNavigation.forEach((defaultNavItem) =>
                    {
                        if ( defaultNavItem.id === futuristicNavItem.id )
                        {
                            futuristicNavItem.children = cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                // Fill horizontal navigation children using the default navigation
                this._horizontalNavigation.forEach((horizontalNavItem) =>
                {
                    this._defaultNavigation.forEach((defaultNavItem) =>
                    {
                        if ( defaultNavItem.id === horizontalNavItem.id )
                        {
                            horizontalNavItem.children = cloneDeep(defaultNavItem.children);
                        }
                    });
                });

                // Return the response
                return [
                    200,
                    {
                        compact   : cloneDeep(this._compactNavigation),
                        default   : cloneDeep(this._defaultNavigation),
                        futuristic: cloneDeep(this._futuristicNavigation),
                        horizontal: cloneDeep(this._horizontalNavigation),
                    },
                ];
            });
    }
}
