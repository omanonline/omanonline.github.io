import { BusinessCategory, JobsCategory, ServicesCategory } from 'app/modules/pages/home/home.type';
import { Observable, ReplaySubject, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HomeService
{
    private _business: ReplaySubject<BusinessCategory[]> = new ReplaySubject<BusinessCategory[]>(1);

    private _jobs: ReplaySubject<JobsCategory[]> = new ReplaySubject<JobsCategory[]>(1);

    private _services: ReplaySubject<ServicesCategory[]> = new ReplaySubject<ServicesCategory[]>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ business
    // -----------------------------------------------------------------------------------------------------

    get business$(): Observable<BusinessCategory[]>
    {
        return this._business.asObservable();
    }



    getAllBusiness(): Observable<BusinessCategory[]>
    {
        return this._httpClient.get<BusinessCategory[]>('api/apps/business/business').pipe(
            tap((response: any) =>
            {
                this._business.next(response);
            }),
        );
    }


    getBusinessByCategory(slug: string): Observable<BusinessCategory[]>
    {
        return this._httpClient.get<BusinessCategory[]>('api/apps/business/business', {
            params: {slug},
        }).pipe(
            tap((response: any) =>
            {
                this._business.next(response);
            }),
        );
    }




    // -----------------------------------------------------------------------------------------------------
    // @ jobs
    // -----------------------------------------------------------------------------------------------------

    get jobs$(): Observable<JobsCategory[]>
    {
        return this._jobs.asObservable();
    }



    getAllJobs(): Observable<JobsCategory[]>
    {
        return this._httpClient.get<JobsCategory[]>('api/apps/jobs/jobs').pipe(
            tap((response: any) =>
            {
                this._jobs.next(response);
            }),
        );
    }


    getJobsByCategory(slug: string): Observable<JobsCategory[]>
    {
        return this._httpClient.get<JobsCategory[]>('api/apps/jobs/jobs', {
            params: {slug},
        }).pipe(
            tap((response: any) =>
            {
                this._jobs.next(response);
            }),
        );
    }


 // -----------------------------------------------------------------------------------------------------
    // @ services
    // -----------------------------------------------------------------------------------------------------

    get services$(): Observable<ServicesCategory[]>
    {
        return this._services.asObservable();
    }



    getAllServices(): Observable<ServicesCategory[]>
    {
        return this._httpClient.get<ServicesCategory[]>('api/apps/services/services').pipe(
            tap((response: any) =>
            {
                this._services.next(response);
            }),
        );
    }


    getServicesByCategory(slug: string): Observable<ServicesCategory[]>
    {
        return this._httpClient.get<ServicesCategory[]>('api/apps/services/services', {
            params: {slug},
        }).pipe(
            tap((response: any) =>
            {
                this._services.next(response);
            }),
        );
    }
}
