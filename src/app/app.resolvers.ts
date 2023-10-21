import { NavigationService } from 'app/core/navigation/navigation.service';
import { forkJoin } from 'rxjs';
import { inject } from '@angular/core';


export const InitialDataResolver = () =>
{
     const navigationService = inject(NavigationService);

    return forkJoin([
        navigationService.get(),
    ]);
};
