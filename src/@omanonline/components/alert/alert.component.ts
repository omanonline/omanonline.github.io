import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { OmanOnlineAlertAppearance, OmanOnlineAlertType } from '@omanonline/components/alert/alert.types';
import { Subject, filter, takeUntil } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { OmanOnlineAlertService } from '@omanonline/components/alert/alert.service';
import { OmanOnlineUtilsService } from '@omanonline/services/utils/utils.service';
import { omanonlineAnimations } from '@omanonline/animations';

@Component({
    selector       : 'omanonline-alert',
    templateUrl    : './alert.component.html',
    styleUrls      : ['./alert.component.scss'],
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations     : omanonlineAnimations,
    exportAs       : 'omanonlineAlert',
    standalone     : true,
    imports        : [NgIf, MatIconModule, MatButtonModule],
})
export class OmanOnlineAlertComponent implements OnChanges, OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_dismissible: BooleanInput;
    static ngAcceptInputType_dismissed: BooleanInput;
    static ngAcceptInputType_showIcon: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() appearance: OmanOnlineAlertAppearance = 'soft';
    @Input() dismissed: boolean = false;
    @Input() dismissible: boolean = false;
    @Input() name: string = this._omanonlineUtilsService.randomId();
    @Input() showIcon: boolean = true;
    @Input() type: OmanOnlineAlertType = 'primary';
    @Output() readonly dismissedChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _omanonlineAlertService: OmanOnlineAlertService,
        private _omanonlineUtilsService: OmanOnlineUtilsService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any
    {
        /* eslint-disable @typescript-eslint/naming-convention */
        return {
            'omanonline-alert-appearance-border' : this.appearance === 'border',
            'omanonline-alert-appearance-fill'   : this.appearance === 'fill',
            'omanonline-alert-appearance-outline': this.appearance === 'outline',
            'omanonline-alert-appearance-soft'   : this.appearance === 'soft',
            'omanonline-alert-dismissed'         : this.dismissed,
            'omanonline-alert-dismissible'       : this.dismissible,
            'omanonline-alert-show-icon'         : this.showIcon,
            'omanonline-alert-type-primary'      : this.type === 'primary',
            'omanonline-alert-type-accent'       : this.type === 'accent',
            'omanonline-alert-type-warn'         : this.type === 'warn',
            'omanonline-alert-type-basic'        : this.type === 'basic',
            'omanonline-alert-type-info'         : this.type === 'info',
            'omanonline-alert-type-success'      : this.type === 'success',
            'omanonline-alert-type-warning'      : this.type === 'warning',
            'omanonline-alert-type-error'        : this.type === 'error',
        };
        /* eslint-enable @typescript-eslint/naming-convention */
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
        // Dismissed
        if ( 'dismissed' in changes )
        {
            // Coerce the value to a boolean
            this.dismissed = coerceBooleanProperty(changes.dismissed.currentValue);

            // Dismiss/show the alert
            this._toggleDismiss(this.dismissed);
        }

        // Dismissible
        if ( 'dismissible' in changes )
        {
            // Coerce the value to a boolean
            this.dismissible = coerceBooleanProperty(changes.dismissible.currentValue);
        }

        // Show icon
        if ( 'showIcon' in changes )
        {
            // Coerce the value to a boolean
            this.showIcon = coerceBooleanProperty(changes.showIcon.currentValue);
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the dismiss calls
        this._omanonlineAlertService.onDismiss
            .pipe(
                filter(name => this.name === name),
                takeUntil(this._unsubscribeAll),
            )
            .subscribe(() =>
            {
                // Dismiss the alert
                this.dismiss();
            });

        // Subscribe to the show calls
        this._omanonlineAlertService.onShow
            .pipe(
                filter(name => this.name === name),
                takeUntil(this._unsubscribeAll),
            )
            .subscribe(() =>
            {
                // Show the alert
                this.show();
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
     * Dismiss the alert
     */
    dismiss(): void
    {
        // Return if the alert is already dismissed
        if ( this.dismissed )
        {
            return;
        }

        // Dismiss the alert
        this._toggleDismiss(true);
    }

    /**
     * Show the dismissed alert
     */
    show(): void
    {
        // Return if the alert is already showing
        if ( !this.dismissed )
        {
            return;
        }

        // Show the alert
        this._toggleDismiss(false);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Dismiss/show the alert
     *
     * @param dismissed
     * @private
     */
    private _toggleDismiss(dismissed: boolean): void
    {
        // Return if the alert is not dismissible
        if ( !this.dismissible )
        {
            return;
        }

        // Set the dismissed
        this.dismissed = dismissed;

        // Execute the observable
        this.dismissedChanged.next(this.dismissed);

        // Notify the change detector
        this._changeDetectorRef.markForCheck();
    }
}
