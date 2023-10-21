import { categories as categoriesData, courses as coursesData, demoCourseSteps as demoCourseStepsData } from './data';

import { Injectable } from '@angular/core';
import { OmanOnlineApiService } from '@omanonline/lib/api/api.service';
import { cloneDeep } from 'lodash-es';

@Injectable({providedIn: 'root'})
export class NewsApi
{
    private _categories: any[] = categoriesData;
    private _courses: any[] = coursesData;
    private _demoCourseSteps: any[] = demoCourseStepsData;

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
        // @ Categories - GET
        // -----------------------------------------------------------------------------------------------------
        this._omanonlineApiService
            .onGet('api/apps/news/categories')
            .reply(() =>
            {
                // Clone the categories
                const categories = cloneDeep(this._categories);

                // Sort the categories alphabetically by title
                categories.sort((a, b) => a.title.localeCompare(b.title));

                return [200, categories];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Courses - GET
        // -----------------------------------------------------------------------------------------------------
        this._omanonlineApiService
            .onGet('api/apps/news/courses')
            .reply(() =>
            {
                // Clone the courses
                const courses = cloneDeep(this._courses);

                return [200, courses];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Course - GET
        // -----------------------------------------------------------------------------------------------------
        this._omanonlineApiService
            .onGet('api/apps/news/courses/course')
            .reply(({request}) =>
            {
                // Get the id from the params
                const id = request.params.get('id');

                // Clone the courses and steps
                const courses = cloneDeep(this._courses);
                const steps = cloneDeep(this._demoCourseSteps);

                // Find the course and attach steps to it
                const course = courses.find(item => item.id === id);
                if ( course )
                {
                    course.steps = steps;
                }

                return [
                    200,
                    course,
                ];
            });
    }
}
