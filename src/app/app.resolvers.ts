import { MessagesService } from 'app/layout/common/messages/messages.service';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { NotificationsService } from 'app/layout/common/notifications/notifications.service';
import { ShortcutsService } from 'app/layout/common/shortcuts/shortcuts.service';
import { forkJoin } from 'rxjs';
import { inject } from '@angular/core';
import { SetupService } from './core/services/setup.service';
import { RouterStateSnapshot } from '@angular/router';


export const InitialDataResolver = () =>
{
     const navigationService = inject(NavigationService);
 
 
    // Fork join multiple API endpoint calls to wait all of them to finish
    return forkJoin([
        navigationService.get(),
        
    ]);
};
