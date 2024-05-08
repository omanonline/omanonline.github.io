import {
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BusinessCategory } from 'app/modules/pages/home/home.type';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { cloneDeep, includes } from 'lodash';
import { SetupService } from 'app/core/services/setup.service';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OmanOnlineCardComponent } from '@omanonline/components/card';

@Component({
    selector: 'home-businesses',
    templateUrl: './businesses.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatButtonModule,
        RouterLink,
        MatIconModule,
        NgFor,
        MatExpansionModule,
        CommonModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        FormsModule,
        MatProgressSpinnerModule,
        OmanOnlineCardComponent,

    ]

    
})
export class BusinessesComponent implements OnInit, OnDestroy {
    constructor(
        private setup: SetupService,
        private metaService: Meta,
        private titleService: Title,
        private cd: ChangeDetectorRef,
        private route: ActivatedRoute
    ) {}
    _businessCategories: any[];

    _business: any[];

    businessCategories = [];

    selectedCategory: string = 'all'; 
    currentQuery: string = '';

    async ngOnInit(): Promise<void> {
        this._businessCategories = await this.setup.getCategories();

        this._business = await this.setup.getBusinesses();

        this.route.queryParams.subscribe((queryParams) => {
            this.currentQuery = queryParams['q'];
      
            if (this.currentQuery) {
              this.filterByQuery(this.currentQuery);
            } else {
              this.loadData(null);
            }
          });

        this.titleService.setTitle('Oman Online - Businesses');
    }

    loadData(categoryId: string): void {
     
        this.businessCategories = [];
        const business = cloneDeep(this._business);

        const categories = cloneDeep(this._businessCategories);

        if (!categoryId) {
            categories.forEach((category) => {
                console.log(category);

                this.businessCategories.push({
                    ...category,
                    business: business.filter(
                        (business) => business.categories.includes(category.id) 
                    ),
                });
            });
        } else {
            const category = categories.find((item) => item.id === categoryId);
            this.businessCategories.push({
                ...category,
                business: business.filter(
                    (business) => business.categories.includes(category.id) 
                ),
            });
        }
    }
    ngOnDestroy(): void {}



    filterByQuery(query: string): void {
        this.currentQuery = query;
    
        if (!query) {
            if (this.selectedCategory === 'all') {
                this.loadData(null);
            } else {
                this.loadData(this.selectedCategory);
            }
        } else {
            const filteredBusinesses = this._business.filter((business) => {
                const propertiesToSearch = [
                    business.name,
                    business.username,
                    business.description,
                    ...(business.services ? business.services.map(service => service.name) : []),
                    ...(business.services ? business.services.map(service => service.description) : []),
                ];
                const matchesQuery = propertiesToSearch.some((property) =>
                    property.toLowerCase().includes(query.toLowerCase())
                );
    
                if (this.selectedCategory === 'all') {
                    return matchesQuery;
                } else {
                    return business.categories.includes(this.selectedCategory) && matchesQuery;
                }
            });
    
            const filteredBusinessCategories = this._businessCategories.map((category) => ({
                ...category,
                business: filteredBusinesses.filter((business) => business.categories.includes(category.id)),
            }));
    
            this.businessCategories = filteredBusinessCategories;
        }
    }

    selectCategory(change: MatSelectChange): void {
        this.selectedCategory = change.value;
    
        if (this.currentQuery) {
            this.filterByQuery(this.currentQuery);
        } else {
            if (change.value === 'all') {
                this.loadData(null);
            } else {
                this.loadData(change.value);
            }
        }
        this.cd.detectChanges();
    }
}
