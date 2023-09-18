import { jobsCategories as jobsCategoriesData, jobs as jobsData } from 'app/mock-api/apps/jobs/data';

import { Injectable } from '@angular/core';
import { OmanOnlineMockApiService } from '@omanonline/lib/mock-api';
import { cloneDeep } from 'lodash-es';

@Injectable({ providedIn: 'root' })
export class JobsMockApi {
    private _jobsCategories: any[] = jobsCategoriesData;
    private _jobs: any[] = jobsData;


    /**
     * Constructor
     */
    constructor(private _omanonlineMockApiService: OmanOnlineMockApiService) {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void {
        // -----------------------------------------------------------------------------------------------------
        // @ JOBS - GET
        // -----------------------------------------------------------------------------------------------------
        this._omanonlineMockApiService
            .onGet('api/apps/jobs/jobs')
            .reply(({ request }) => {
                // Get the category slug
                const slug = request.params.get('slug');

                // Prepare the results
                const results = [];

                // Get FAQs
                const jobs = cloneDeep(this._jobs);

                // Get FAQ Categories
                const categories = cloneDeep(this._jobsCategories);

                // If slug is not provided...
                if (!slug) {
                    // Go through each category and set the results
                    categories.forEach((category) => {
                        results.push(
                            {
                                ...category,
                                jobs: jobs.filter(jobs => jobs.categoryId === category.id),
                            },
                        );
                    });
                }
                // Otherwise...
                else {
                    // Find the category by the slug
                    const category = categories.find(item => item.slug === slug);

                    // Set the results
                    results.push(
                        {
                            ...category,
                            jobs: jobs.filter(jobs => jobs.categoryId === category.id),
                        },
                    );
                }

                // Return the response
                return [200, results];
            });
    }

}
