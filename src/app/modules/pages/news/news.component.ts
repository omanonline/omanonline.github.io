import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { RouterOutlet } from '@angular/router';

@Component({
    selector       : 'news',
    templateUrl    : './news.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone     : true,
    imports        : [RouterOutlet],
})
export class NewsComponent
{
    /**
     * Constructor
     */
    constructor( private metaService: Meta, private titleService: Title)
    {           
          this.titleService.setTitle("Oman Online - News");

    }
}
