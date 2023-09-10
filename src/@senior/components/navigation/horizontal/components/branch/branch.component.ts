import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewChild, forwardRef } from '@angular/core';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { BooleanInput } from '@angular/cdk/coercion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SeniorHorizontalNavigationBasicItemComponent } from '@senior/components/navigation/horizontal/components/basic/basic.component';
import { SeniorHorizontalNavigationComponent } from '@senior/components/navigation/horizontal/horizontal.component';
import { SeniorHorizontalNavigationDividerItemComponent } from '@senior/components/navigation/horizontal/components/divider/divider.component';
import { SeniorNavigationItem } from '@senior/components/navigation/navigation.types';
import { SeniorNavigationService } from '@senior/components/navigation/navigation.service';

@Component({
    selector       : 'senior-horizontal-navigation-branch-item',
    templateUrl    : './branch.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [NgIf, NgClass, MatMenuModule, NgTemplateOutlet, NgFor, SeniorHorizontalNavigationBasicItemComponent, forwardRef(() => SeniorHorizontalNavigationBranchItemComponent), SeniorHorizontalNavigationDividerItemComponent, MatTooltipModule, MatIconModule],
})
export class SeniorHorizontalNavigationBranchItemComponent implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_child: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() child: boolean = false;
    @Input() item: SeniorNavigationItem;
    @Input() name: string;
    @ViewChild('matMenu', {static: true}) matMenu: MatMenu;

    private _seniorHorizontalNavigationComponent: SeniorHorizontalNavigationComponent;
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
        this._seniorHorizontalNavigationComponent = this._seniorNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._seniorHorizontalNavigationComponent.onRefreshed.pipe(
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
