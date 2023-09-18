import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { HomeService } from 'app/modules/pages/home/home.service';
import { JobsCategory } from 'app/modules/pages/home/home.type';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'home-jobs',
    templateUrl  : './jobs.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule, NgFor, MatExpansionModule],
})
export class JobsComponent implements OnInit, OnDestroy
{
    jobsCategories: JobsCategory[];
    private _unsubscribeAll: Subject<any> = new Subject();

    /**
     * Constructor
     */
    constructor(private _homeService: HomeService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the FAQs
        this._homeService.jobs$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((jobsCategories) =>
            {
                this.jobsCategories = jobsCategories;
            });

            console.log(this.jobsCategories);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
