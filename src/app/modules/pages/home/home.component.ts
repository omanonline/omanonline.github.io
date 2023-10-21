import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ApiService } from 'app/core/services/api.service';
import { BusinessCategory } from 'app/modules/pages/home/home.type';
import { HomeService } from 'app/modules/pages/home/home.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [MatFormFieldModule, MatInputModule, MatIconModule, RouterLink, MatExpansionModule, NgFor],
})
export class HomeComponent implements OnInit, OnDestroy
{
    businessCategory: BusinessCategory;
    private _unsubscribeAll: Subject<any> = new Subject();

    /**
     * Constructor
     */
    constructor(private _homeService: HomeService, private api: ApiService,)
    {
        //console.log(api.loadBusiness("10000"));
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the Business with star
        this._homeService.business$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((businessCategories) =>
            {
                this.businessCategory = businessCategories[0];
            });
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
