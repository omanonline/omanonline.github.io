import { Injectable } from '@angular/core';
import { OmanOnlineMockApiService } from '@omanonline/lib/mock-api';
import { cloneDeep } from 'lodash-es';
import { project as projectData } from 'app/mock-api/dashboards/project/data';

@Injectable({providedIn: 'root'})
export class ProjectMockApi
{
    private _project: any = projectData;

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
            .onGet('api/dashboards/project')
            .reply(() => [200, cloneDeep(this._project)]);
    }
}
