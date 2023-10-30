import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SeoService } from './core/services/seo.service';
import { AppUpdateService } from './core/services/update.service';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    standalone : true,
    imports    : [RouterOutlet],
    providers :[SeoService]
})
export class AppComponent
{
    /**
     * Constructor
     */
    constructor(private seoService: SeoService ,appUpdateService: AppUpdateService)
    {
        this.seoService.enableSeo();
    }
}
