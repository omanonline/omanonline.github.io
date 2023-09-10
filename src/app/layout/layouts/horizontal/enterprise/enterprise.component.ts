import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SeniorHorizontalNavigationComponent, SeniorNavigationService, SeniorVerticalNavigationComponent } from '@senior/components/navigation';
import { Subject, takeUntil } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MessagesComponent } from 'app/layout/common/messages/messages.component';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { NgIf } from '@angular/common';
import { NotificationsComponent } from 'app/layout/common/notifications/notifications.component';
import { SearchComponent } from 'app/layout/common/search/search.component';
import { SeniorFullscreenComponent } from '@senior/components/fullscreen';
import { SeniorLoadingBarComponent } from '@senior/components/loading-bar';
import { SeniorMediaWatcherService } from '@senior/services/media-watcher';
import { SettingsComponent } from 'app/layout/common/settings/settings.component';
import { ShortcutsComponent } from 'app/layout/common/shortcuts/shortcuts.component';

@Component({
    selector: 'enterprise-layout',
    templateUrl: './enterprise.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [SeniorLoadingBarComponent, NgIf, SeniorVerticalNavigationComponent, MatButtonModule, MatIconModule, SeniorFullscreenComponent, SearchComponent, ShortcutsComponent, MessagesComponent, NotificationsComponent, SeniorHorizontalNavigationComponent, RouterOutlet, SettingsComponent],
})
export class EnterpriseLayoutComponent implements OnInit, OnDestroy {
    isScreenSmall: boolean;
    navigation: Navigation;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _seniorMediaWatcherService: SeniorMediaWatcherService,
        private _seniorNavigationService: SeniorNavigationService,
    ) {
    }
    get currentYear(): number {
        return new Date().getFullYear();
    }
    ngOnInit(): void {
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation;
            });
        this._seniorMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({ matchingAliases }) => {
                this.isScreenSmall = !matchingAliases.includes('md');
            });
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }
    toggleNavigation(name: string): void {
        const navigation = this._seniorNavigationService.getComponent<SeniorVerticalNavigationComponent>(name);
        if (navigation) {
            navigation.toggle();
        }
    }
}
