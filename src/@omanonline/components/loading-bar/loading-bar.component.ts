import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';
import { OmanOnlineLoadingService } from '@omanonline/services/loading';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
    selector     : 'omanonline-loading-bar',
    templateUrl  : './loading-bar.component.html',
    styleUrls    : ['./loading-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'omanonlineLoadingBar',
    standalone   : true,
    imports      : [NgIf, MatProgressBarModule],
})
export class OmanOnlineLoadingBarComponent implements OnChanges, OnInit, OnDestroy
{
    @Input() autoMode: boolean = true;
    mode: 'determinate' | 'indeterminate';
    progress: number = 0;
    show: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _omanonlineLoadingService: OmanOnlineLoadingService)
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
        // Auto mode
        if ( 'autoMode' in changes )
        {
            // Set the auto mode in the service
            this._omanonlineLoadingService.setAutoMode(coerceBooleanProperty(changes.autoMode.currentValue));
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the service
        this._omanonlineLoadingService.mode$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) =>
            {
                this.mode = value;
            });

        this._omanonlineLoadingService.progress$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) =>
            {
                this.progress = value;
            });

        this._omanonlineLoadingService.show$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) =>
            {
                this.show = value;
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
