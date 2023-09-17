import { Component, ViewEncapsulation } from '@angular/core';

import { GiscusDirective } from 'app/core/directives/giscus.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector     : 'categories',
    standalone   : true,
    templateUrl  : './categories.component.html',
    encapsulation: ViewEncapsulation.None,
    imports      : [MatFormFieldModule, MatInputModule, MatIconModule, RouterLink, NgFor,GiscusDirective,],

})
export class CategoriesComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
