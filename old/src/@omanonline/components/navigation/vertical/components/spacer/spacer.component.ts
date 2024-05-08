import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { NgClass } from '@angular/common';
import { OmanOnlineNavigationItem } from '@omanonline/components/navigation/navigation.types';
import { OmanOnlineNavigationService } from '@omanonline/components/navigation/navigation.service';
import { OmanOnlineVerticalNavigationComponent } from '@omanonline/components/navigation/vertical/vertical.component';

@Component({
    selector       : 'omanonline-vertical-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [NgClass],
})
export class OmanOnlineVerticalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
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
}
