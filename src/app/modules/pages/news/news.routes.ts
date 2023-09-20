import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { catchError, throwError } from 'rxjs';

import { NewsComponent } from './news.component';
import { NewsDetailsComponent } from './details/details.component';
import { NewsListComponent } from './list/list.component';
import { NewsService } from './news.service';
import { inject } from '@angular/core';

/**
 * Course resolver
 *
 * @param route
 * @param state
 */
const courseResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
{
    const newsService = inject(NewsService);
    const router = inject(Router);

    return newsService.getCourseById(route.paramMap.get('id')).pipe(
        // Error here means the requested course is not available
        catchError((error) =>
        {
            // Log the error
            console.error(error);

            // Get the parent url
            const parentUrl = state.url.split('/').slice(0, -1).join('/');

            // Navigate to there
            router.navigateByUrl(parentUrl);

            // Throw an error
            return throwError(error);
        }),
    );
};

export default [
    {
        path     : '',
        component: NewsComponent,
        resolve  : {
            categories: () => inject(NewsService).getCategories(),
        },
        children : [
            {
                path     : '',
                pathMatch: 'full',
                component: NewsListComponent,
                resolve  : {
                    courses: () => inject(NewsService).getCourses(),
                },
            },
            {
                path     : ':id',
                component: NewsDetailsComponent,
                resolve  : {
                    course: courseResolver,
                },
            },
        ],
    },
] as Routes;
