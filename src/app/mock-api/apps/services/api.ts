import { servicesCategories as servicesCategoriesData, services as servicesData } from 'app/mock-api/apps/services/data';

import { Injectable } from '@angular/core';
import { OmanOnlineMockApiService } from '@omanonline/lib/mock-api';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class ServicesMockApi
{
    private _servicesCategories: any[] = servicesCategoriesData;
    private _services: any[] = servicesData;


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
        // @ Services - GET
        // -----------------------------------------------------------------------------------------------------
        this._omanonlineMockApiService
            .onGet('api/apps/services/services')
            .reply(({request}) =>
            {
                // Get the category slug
                const slug = request.params.get('slug');

                // Prepare the results
                const results = [];

                // Get Services
                const services = cloneDeep(this._services);

                // Get Services Categories
                const categories = cloneDeep(this._servicesCategories);

                // If slug is not provided...
                if ( !slug )
                {
                    // Go through each category and set the results
                    categories.forEach((category) =>
                    {
                        results.push(
                            {
                                ...category,
                                services: services.filter(services => services.categoryId === category.id),
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
                            services: services.filter(services => services.categoryId === category.id),
                        },
                    );
                }

                // Return the response
                return [200, results];
            });


    }
}
