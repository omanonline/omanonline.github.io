import { Injectable } from '@angular/core';
import { OmanOnlineMockApiService } from '@omanonline/lib/mock-api';
import { analytics as analyticsData } from 'app/mock-api/dashboards/analytics/data';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class AnalyticsMockApi
{
    private _analytics: any = analyticsData;

    /**
     * Constructor
     */
    constructor(private _omanonlineMockApiService: OmanOnlineMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._omanonlineMockApiService
            .onGet('api/dashboards/analytics')
            .reply(() => [200, cloneDeep(this._analytics)]);
    }
}
