import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ReplaySubject, Subject } from 'rxjs';

import { SeniorHorizontalNavigationBasicItemComponent } from './components/basic/basic.component';
import { SeniorHorizontalNavigationBranchItemComponent } from './components/branch/branch.component';
import { SeniorHorizontalNavigationSpacerItemComponent } from './components/spacer/spacer.component';
import { SeniorNavigationItem } from '@senior/components/navigation/navigation.types';
import { SeniorNavigationService } from '@senior/components/navigation/navigation.service';
import { SeniorUtilsService } from '@senior/services/utils/utils.service';
import { seniorAnimations } from '@senior/animations';

@Component({
    selector       : 'senior-horizontal-navigation',
    templateUrl    : './horizontal.component.html',
    styleUrls      : ['./horizontal.component.scss'],
    animations     : seniorAnimations,
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'seniorHorizontalNavigation',
    standalone     : true,
    imports        : [NgFor, NgIf, SeniorHorizontalNavigationBasicItemComponent, SeniorHorizontalNavigationBranchItemComponent, SeniorHorizontalNavigationSpacerItemComponent],
})
export class SeniorHorizontalNavigationComponent implements OnChanges, OnInit, OnDestroy
{
    @Input() name: string = this._seniorUtilsService.randomId();
    @Input() navigation: SeniorNavigationItem[];

    onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _seniorNavigationService: SeniorNavigationService,
        private _seniorUtilsService: SeniorUtilsService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Navigation
        if ( 'navigation' in changes )
        {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Make sure the name input is not an empty string
        if ( this.name === '' )
        {
            this.name = this._seniorUtilsService.randomId();
        }

        // Register the navigation component
        this._seniorNavigationService.registerComponent(this.name, this);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Deregister the navigation component from the registry
        this._seniorNavigationService.deregisterComponent(this.name);

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Refresh the component to apply the changes
     */
    refresh(): void
    {
        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this.onRefreshed.next(true);
    }

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
