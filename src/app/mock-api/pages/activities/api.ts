import { Injectable } from '@angular/core';
import { OmanOnlineMockApiService } from '@omanonline/lib/mock-api';
import { activities as activitiesData } from 'app/mock-api/pages/activities/data';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class ActivitiesMockApi
{
    private _activities: any = activitiesData;

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
        // @ Activities - GET
        // -----------------------------------------------------------------------------------------------------
        this._omanonlineMockApiService
            .onGet('api/pages/activities')
            .reply(() => [200, cloneDeep(this._activities)]);
    }
}
