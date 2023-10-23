import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { BusinessCategory } from 'app/modules/pages/home/home.type';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { cloneDeep } from 'lodash';
import { SetupService } from 'app/core/services/setup.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'home-businesses',
    templateUrl: './businesses.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MatButtonModule, RouterLink, MatIconModule, NgFor, MatExpansionModule,CommonModule],
})
export class BusinessesComponent implements OnInit, OnDestroy {


    constructor(private setup: SetupService) {
    }
    _businessCategories: any[];

    _business: any[];
    businessCategories = [];

    async ngOnInit(): Promise<void> {
        this._businessCategories = await this.setup.getCategories();

        this._business = await this.setup.getBusinesses();
        const slug = null;


        const business = cloneDeep(this._business);

        const categories = cloneDeep(this._businessCategories);

        if (!slug) {
            categories.forEach((category) => {
                this.businessCategories.push({
                    ...category,
                    business: business.filter(
                        (business) =>
                            business.categoryId === category.id
                    ),
                });
            });
        }
        else {
            const category = categories.find(
                (item) => item.slug === slug
            );
            this.businessCategories.push({
                ...category,
                business: business.filter(
                    (business) => business.categoryId === category.id
                ),
            });
        }

 

    }


    ngOnDestroy(): void {

    }


}
