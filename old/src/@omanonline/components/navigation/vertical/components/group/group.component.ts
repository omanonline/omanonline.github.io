import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, forwardRef } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { BooleanInput } from '@angular/cdk/coercion';
import { MatIconModule } from '@angular/material/icon';
import { OmanOnlineNavigationItem } from '@omanonline/components/navigation/navigation.types';
import { OmanOnlineNavigationService } from '@omanonline/components/navigation/navigation.service';
import { OmanOnlineVerticalNavigationBasicItemComponent } from '@omanonline/components/navigation/vertical/components/basic/basic.component';
import { OmanOnlineVerticalNavigationCollapsableItemComponent } from '@omanonline/components/navigation/vertical/components/collapsable/collapsable.component';
import { OmanOnlineVerticalNavigationComponent } from '@omanonline/components/navigation/vertical/vertical.component';
import { OmanOnlineVerticalNavigationDividerItemComponent } from '@omanonline/components/navigation/vertical/components/divider/divider.component';
import { OmanOnlineVerticalNavigationSpacerItemComponent } from '@omanonline/components/navigation/vertical/components/spacer/spacer.component';

@Component({
    selector       : 'omanonline-vertical-navigation-group-item',
    templateUrl    : './group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [NgClass, NgIf, MatIconModule, NgFor, OmanOnlineVerticalNavigationBasicItemComponent, OmanOnlineVerticalNavigationCollapsableItemComponent, OmanOnlineVerticalNavigationDividerItemComponent, forwardRef(() => OmanOnlineVerticalNavigationGroupItemComponent), OmanOnlineVerticalNavigationSpacerItemComponent],
})
export class OmanOnlineVerticalNavigationGroupItemComponent implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() autoCollapse: boolean;
    @Input() item: OmanOnlineNavigationItem;
    @Input() name: string;

    private _omanonlineVerticalNavigationComponent: OmanOnlineVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _omanonlineNavigationService: OmanOnlineNavigationService,
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
        this._omanonlineVerticalNavigationComponent = this._omanonlineNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._omanonlineVerticalNavigationComponent.onRefreshed.pipe(
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
