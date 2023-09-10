import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { BooleanInput } from '@angular/cdk/coercion';
import { MatIconModule } from '@angular/material/icon';
import { SeniorNavigationItem } from '@senior/components/navigation/navigation.types';
import { SeniorNavigationService } from '@senior/components/navigation/navigation.service';
import { SeniorVerticalNavigationBasicItemComponent } from '@senior/components/navigation/vertical/components/basic/basic.component';
import { SeniorVerticalNavigationCollapsableItemComponent } from '@senior/components/navigation/vertical/components/collapsable/collapsable.component';
import { SeniorVerticalNavigationComponent } from '@senior/components/navigation/vertical/vertical.component';
import { SeniorVerticalNavigationDividerItemComponent } from '@senior/components/navigation/vertical/components/divider/divider.component';
import { SeniorVerticalNavigationSpacerItemComponent } from '@senior/components/navigation/vertical/components/spacer/spacer.component';

@Component({
    selector       : 'senior-vertical-navigation-group-item',
    templateUrl    : './group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [NgClass, NgIf, MatIconModule, NgFor, SeniorVerticalNavigationBasicItemComponent, SeniorVerticalNavigationCollapsableItemComponent, SeniorVerticalNavigationDividerItemComponent, forwardRef(() => SeniorVerticalNavigationGroupItemComponent), SeniorVerticalNavigationSpacerItemComponent],
})
export class SeniorVerticalNavigationGroupItemComponent implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() autoCollapse: boolean;
    @Input() item: SeniorNavigationItem;
    @Input() name: string;

    private _seniorVerticalNavigationComponent: SeniorVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _seniorNavigationService: SeniorNavigationService,
    )
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
        // Get the parent navigation component
        this._seniorVerticalNavigationComponent = this._seniorNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._seniorVerticalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll),
        ).subscribe(() =>
        {
            // Mark for check
            this._changeDetectorRef.markForCheck();
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
