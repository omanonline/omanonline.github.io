import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

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
    constructor()
    {
    }
}
