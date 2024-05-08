import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { OmanOnlineHorizontalNavigationComponent, OmanOnlineNavigationService, OmanOnlineVerticalNavigationComponent } from '@omanonline/components/navigation';
import { Subject, takeUntil } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { NgIf } from '@angular/common';
import { OmanOnlineFullscreenComponent } from '@omanonline/components/fullscreen';
import { OmanOnlineLoadingBarComponent } from '@omanonline/components/loading-bar';
import { OmanOnlineMediaWatcherService } from '@omanonline/services/media-watcher';
import { SettingsComponent } from 'app/layout/common/settings/settings.component';

@Component({
    selector: 'enterprise-layout',
    templateUrl: './enterprise.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [OmanOnlineLoadingBarComponent, NgIf, OmanOnlineVerticalNavigationComponent, MatButtonModule, MatIconModule, OmanOnlineFullscreenComponent, OmanOnlineHorizontalNavigationComponent, RouterOutlet, SettingsComponent],
})
export class EnterpriseLayoutComponent implements OnInit, OnDestroy {
    isScreenSmall: boolean;
    navigation: Navigation;
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    constructor(
        private _activatedRoute: ActivatedRoute,
        private _router: Router,
        private _navigationService: NavigationService,
        private _omanonlineMediaWatcherService: OmanOnlineMediaWatcherService,
        private _omanonlineNavigationService: OmanOnlineNavigationService,
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
        this._omanonlineMediaWatcherService.onMediaChange$
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
        const navigation = this._omanonlineNavigationService.getComponent<OmanOnlineVerticalNavigationComponent>(name);
        if (navigation) {
            navigation.toggle();
        }
    }
}
