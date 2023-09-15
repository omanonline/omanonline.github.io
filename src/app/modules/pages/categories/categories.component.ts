import { Component, ViewEncapsulation } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UtterancesDirective } from 'app/mock-api/comments/utterances.directive';

@Component({
    selector     : 'categories',
    standalone   : true,
    templateUrl  : './categories.component.html',
    encapsulation: ViewEncapsulation.None,
    imports      : [MatFormFieldModule, MatInputModule, MatIconModule, RouterLink, NgFor,UtterancesDirective,],

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
