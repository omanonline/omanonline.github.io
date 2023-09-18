import { businessCategories as businessCategoriesData, business as businessData } from 'app/mock-api/apps/businness/data';

import { Injectable } from '@angular/core';
import { OmanOnlineMockApiService } from '@omanonline/lib/mock-api';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class BusinessMockApi
{
    private _businessCategories: any[] = businessCategoriesData;
    private _business: any[] = businessData;

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
        // @ FAQs - GET
        // -----------------------------------------------------------------------------------------------------
        this._omanonlineMockApiService
            .onGet('api/apps/business/business')
            .reply(({request}) =>
            {
                // Get the category slug
                const slug = request.params.get('slug');

                // Prepare the results
                const results = [];

                // Get FAQs
                const business = cloneDeep(this._business);

                // Get FAQ Categories
                const categories = cloneDeep(this._businessCategories);

                // If slug is not provided...
                if ( !slug )
                {
                    // Go through each category and set the results
                    categories.forEach((category) =>
                    {
                        results.push(
                            {
                                ...category,
                                business: business.filter(business => business.categoryId === category.id),
                            },
                        );
                    });
                }
                // Otherwise...
                else
                {
                    // Find the category by the slug
                    const category = categories.find(item => item.slug === slug);

                    // Set the results
                    results.push(
                        {
                            ...category,
                            business: business.filter(business => business.categoryId === category.id),
                        },
                    );
                }

                // Return the response
                return [200, results];
            });

        }
}
