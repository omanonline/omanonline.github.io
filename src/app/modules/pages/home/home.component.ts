import { Component, ViewEncapsulation } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'home',
    standalone   : true,
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None,
    imports      : [MatFormFieldModule, MatInputModule, MatIconModule, RouterLink, NgFor],

})
export class HomeComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
