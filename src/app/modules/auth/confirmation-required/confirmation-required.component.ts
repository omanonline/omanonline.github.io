import { Component, ViewEncapsulation } from '@angular/core';

import { RouterLink } from '@angular/router';
import { omanonlineAnimations } from '@omanonline/animations';

@Component({
    selector     : 'auth-confirmation-required',
    templateUrl  : './confirmation-required.component.html',
    encapsulation: ViewEncapsulation.None,
    animations   : omanonlineAnimations,
    standalone   : true,
    imports      : [RouterLink],
})
export class AuthConfirmationRequiredComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
