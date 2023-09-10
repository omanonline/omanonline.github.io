import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild, forwardRef } from '@angular/core';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { BooleanInput } from '@angular/cdk/coercion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OmanOnlineHorizontalNavigationBasicItemComponent } from '@omanonline/components/navigation/horizontal/components/basic/basic.component';
import { OmanOnlineHorizontalNavigationComponent } from '@omanonline/components/navigation/horizontal/horizontal.component';
import { OmanOnlineHorizontalNavigationDividerItemComponent } from '@omanonline/components/navigation/horizontal/components/divider/divider.component';
import { OmanOnlineNavigationItem } from '@omanonline/components/navigation/navigation.types';
import { OmanOnlineNavigationService } from '@omanonline/components/navigation/navigation.service';

@Component({
    selector       : 'omanonline-horizontal-navigation-branch-item',
    templateUrl    : './branch.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [NgIf, NgClass, MatMenuModule, NgTemplateOutlet, NgFor, OmanOnlineHorizontalNavigationBasicItemComponent, forwardRef(() => OmanOnlineHorizontalNavigationBranchItemComponent), OmanOnlineHorizontalNavigationDividerItemComponent, MatTooltipModule, MatIconModule],
})
export class OmanOnlineHorizontalNavigationBranchItemComponent implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_child: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() child: boolean = false;
    @Input() item: OmanOnlineNavigationItem;
    @Input() name: string;
    @ViewChild('matMenu', {static: true}) matMenu: MatMenu;

    private _omanonlineHorizontalNavigationComponent: OmanOnlineHorizontalNavigationComponent;
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
        this._omanonlineHorizontalNavigationComponent = this._omanonlineNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._omanonlineHorizontalNavigationComponent.onRefreshed.pipe(
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
     * Trigger the change detection
     */
    triggerChangeDetection(): void
    {
        // Mark for check
        this._changeDetectorRef.markForCheck();
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
