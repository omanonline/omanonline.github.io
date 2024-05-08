import { Injectable } from '@angular/core';
import { OmanOnlineApiService } from '@omanonline/lib/api';
import { cloneDeep } from 'lodash-es';
import { SetupService } from 'app/core/services/setup.service';

@Injectable({ providedIn: 'root' })
export class BusinessApi {
    private _businessCategories: any[];

    private _business: any[];

    /**
     * Constructor
     */
    constructor(
        private _omanonlineApiService: OmanOnlineApiService,
        private setup: SetupService
    ) {
        // Register  API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register  API handlers
     */
    async registerHandlers(): Promise<void> {
        this._businessCategories = await this.setup.getCategories();
 
        this._business = await this.setup.getBusinesses();
 
        // -----------------------------------------------------------------------------------------------------
        // @ Businesses - GET
        // -----------------------------------------------------------------------------------------------------
        this._omanonlineApiService
            .onGet('api/apps/business/business')
            .reply(({ request }) => {
                // Get the category slug
                const slug = request.params.get('slug');

                // Prepare the results
                const results = [];

                // Get Businesses
                const business = cloneDeep(this._business);

                // Get Businesses Categories
                const categories = cloneDeep(this._businessCategories);

                // If slug is not provided...
                if (!slug) {
                    // Go through each category and set the results
                    categories.forEach((category) => {
                        results.push({
                            ...category,
                            business: business.filter(
                                (business) =>
                                    business.categoryId === category.id
                            ),
                        });
                    });
                }
                // Otherwise...
                else {
                    // Find the category by the slug
                    const category = categories.find(
                        (item) => item.slug === slug
                    );
                    // Set the results
                    results.push({
                        ...category,
                        business: business.filter(
                            (business) => business.categoryId === category.id
                        ),
                    });
                }

                // Return the response
                return [200, results];
            });
    }
}
