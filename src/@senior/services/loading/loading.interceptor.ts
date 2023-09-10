import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, finalize, take } from 'rxjs';

import { SeniorLoadingService } from '@senior/services/loading/loading.service';
import { inject } from '@angular/core';

export const seniorLoadingInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> =>
{
    const seniorLoadingService = inject(SeniorLoadingService);
    let handleRequestsAutomatically = false;

    seniorLoadingService.auto$
        .pipe(take(1))
        .subscribe((value) =>
        {
            handleRequestsAutomatically = value;
        });

    // If the Auto mode is turned off, do nothing
    if ( !handleRequestsAutomatically )
    {
        return next(req);
    }

    // Set the loading status to true
    seniorLoadingService._setLoadingStatus(true, req.url);

    return next(req).pipe(
        finalize(() =>
        {
            // Set the status to false if there are any errors or the request is completed
            seniorLoadingService._setLoadingStatus(false, req.url);
        }));
};
