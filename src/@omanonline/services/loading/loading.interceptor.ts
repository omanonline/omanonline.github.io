import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, finalize, take } from 'rxjs';

import { OmanOnlineLoadingService } from '@omanonline/services/loading/loading.service';
import { inject } from '@angular/core';

export const omanonlineLoadingInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> =>
{
    const omanonlineLoadingService = inject(OmanOnlineLoadingService);
    let handleRequestsAutomatically = false;

    omanonlineLoadingService.auto$
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
    omanonlineLoadingService._setLoadingStatus(true, req.url);

    return next(req).pipe(
        finalize(() =>
        {
            // Set the status to false if there are any errors or the request is completed
            omanonlineLoadingService._setLoadingStatus(false, req.url);
        }));
};
