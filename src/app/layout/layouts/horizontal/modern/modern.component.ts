import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { OmanOnlineHorizontalNavigationComponent, OmanOnlineNavigationService, OmanOnlineVerticalNavigationComponent } from '@omanonline/components/navigation';
import { Subject, takeUntil } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessagesComponent } from 'app/layout/common/messages/messages.component';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { NgIf } from '@angular/common';
import { NotificationsComponent } from 'app/layout/common/notifications/notifications.component';
import { OmanOnlineFullscreenComponent } from '@omanonline/components/fullscreen';
import { OmanOnlineLoadingBarComponent } from '@omanonline/components/loading-bar';
import { OmanOnlineMediaWatcherService } from '@omanonline/services/media-watcher';
import { SearchComponent } from 'app/layout/common/search/search.component';
import { SettingsComponent } from 'app/layout/common/settings/settings.component';
import { ShortcutsComponent } from 'app/layout/common/shortcuts/shortcuts.component';

@Component({
    selector     : 'modern-layout',
    templateUrl  : './modern.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [OmanOnlineLoadingBarComponent, NgIf, OmanOnlineVerticalNavigationComponent, OmanOnlineHorizontalNavigationComponent, MatButtonModule, MatIconModule, OmanOnlineFullscreenComponent, SearchComponent, ShortcutsComponent, MessagesComponent, NotificationsComponent, RouterOutlet,SettingsComponent],
})
export class ModernLayoutComponent implements OnInit, OnDestroy
{
    isScreenSmall: boolean;
    navigation: Navigation;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _omanonlineMediaWatcherService: OmanOnlineMediaWatcherService,
        private _omanonlineNavigationService: OmanOnlineNavigationService,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for current year
     */
    get currentYear(): number
    {
        return new Date().getFullYear();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to navigation data
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) =>
            {
                this.navigation = navigation;
            });

        // Subscribe to media changes
        this._omanonlineMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) =>
            {
                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
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
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._omanonlineNavigationService.getComponent<OmanOnlineVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }
}
