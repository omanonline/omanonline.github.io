import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ApiService } from 'app/core/services/api.service';
import { FaqCategory } from 'app/modules/pages/home/home.type';
import { HelpCenterService } from 'app/modules/pages/home/home.service';
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
    faqCategory: FaqCategory;
    private _unsubscribeAll: Subject<any> = new Subject();

    /**
     * Constructor
     */
    constructor(private _homeService: HelpCenterService, private api: ApiService,)
    {
        console.log(api.loadBusiness("10000"));
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
        this._homeService.faqs$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((faqCategories) =>
            {
                this.faqCategory = faqCategories[0];
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
