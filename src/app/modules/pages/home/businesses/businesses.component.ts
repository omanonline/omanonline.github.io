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
import { cloneDeep } from 'lodash';
import { SetupService } from 'app/core/services/setup.service';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

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
        FormsModule
    ],
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

    selectedCategory: string = 'all'; // Default to 'all' or any other appropriate default value
    currentQuery: string = '';

    async ngOnInit(): Promise<void> {
        this._businessCategories = await this.setup.getCategories();

        this._business = await this.setup.getBusinesses();

        this.route.queryParams.subscribe((queryParams) => {
            this.currentQuery = queryParams['q'];
      
            if (this.currentQuery) {
              // Call filterByQuery with the keyword obtained from the query parameter
              this.filterByQuery(this.currentQuery);
            } else {
              // If no query parameter is present, load the data normally
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
                this.businessCategories.push({
                    ...category,
                    business: business.filter(
                        (business) => business.categoryId === category.id
                    ),
                });
            });
        } else {
            const category = categories.find((item) => item.id === categoryId);
            this.businessCategories.push({
                ...category,
                business: business.filter(
                    (business) => business.categoryId === category.id
                ),
            });
        }
    }
    ngOnDestroy(): void {}



    filterByQuery(query: string): void {
        this.currentQuery = query;
    
        if (!query) {
            // If the query is empty, display all data based on the selected category or all categories
            if (this.selectedCategory === 'all') {
                this.loadData(null); // Load all categories
            } else {
                this.loadData(this.selectedCategory); // Load the selected category
            }
        } else {
            // If there is a query, filter based on the query and the selected category
            const filteredBusinesses = this._business.filter((business) => {
                const propertiesToSearch = [
                    business.name,
                    business.username,
                    business.description,
                    ...business.address, // Assuming address is an array
                    // Add other properties you want to search here
                ];
    
                // Check if any property contains the query
                const matchesQuery = propertiesToSearch.some((property) =>
                    property.toLowerCase().includes(query.toLowerCase())
                );
    
                if (this.selectedCategory === 'all') {
                    // If "all" categories are selected, return true for any matching business
                    return matchesQuery;
                } else {
                    // If a specific category is selected, return true only for the selected category
                    return business.categoryId === this.selectedCategory && matchesQuery;
                }
            });
    
            const filteredBusinessCategories = this._businessCategories.map((category) => ({
                ...category,
                business: filteredBusinesses.filter((business) => business.categoryId === category.id),
            }));
    
            // Update the displayed business categories with the filtered results
            this.businessCategories = filteredBusinessCategories;
        }
    }
    
    


    selectCategory(change: MatSelectChange): void {
        this.selectedCategory = change.value;
    
        if (this.currentQuery) {
            // If there is a query, filter with the selected category and the query
            this.filterByQuery(this.currentQuery);
        } else {
            // If the query is empty, load all data in the selected category
            if (change.value === 'all') {
                this.loadData(null);
            } else {
                this.loadData(change.value);
            }
        }
        this.cd.detectChanges();
    }
}
