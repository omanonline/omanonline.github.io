import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { HomeService } from 'app/modules/pages/home/home.service';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServicesCategory } from 'app/modules/pages/home/home.type';

@Component({
    selector     : 'home-services',
    templateUrl  : './services.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatButtonModule, RouterLink, MatIconModule, NgFor, MatExpansionModule],
})
export class ServicesComponent implements OnInit, OnDestroy
{
    servicesCategories: ServicesCategory[];
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
        // Get the Service
        this._homeService.services$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((servicesCategories) =>
            {
                this.servicesCategories = servicesCategories;
            });

            console.log(this.servicesCategories);

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
