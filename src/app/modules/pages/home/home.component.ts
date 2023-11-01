import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from 'app/core/services/api.service';
import { BusinessCategory } from 'app/modules/pages/home/home.type';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CommonModule, NgClass, NgFor, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SetupService } from 'app/core/services/setup.service';
import { OmanOnlineCardComponent } from '@omanonline/components/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Meta, Title } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { cloneDeep } from 'lodash';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormsModule,  
        RouterLink,
        MatExpansionModule,
        NgFor,
        CommonModule,
        OmanOnlineCardComponent,
        MatButtonModule, NgClass, MatMenuModule, MatProgressBarModule, TextFieldModule, MatDividerModule, MatTooltipModule, TitleCasePipe
    ],
})
export class HomeComponent implements OnInit, OnDestroy {
    _businessCategories: any[];
    _business: any[];
    searchKeyword: string = '';
    businessCategories = [];

    constructor(private setup: SetupService,private metaService: Meta, private titleService: Title,private router: Router) {}

    async ngOnInit(): Promise<void> {

        this.businessCategories = await this.setup.getCategories();

        this._business = await this.setup.getBusinesses();
       
        this.businessCategories = [];
        const business = cloneDeep(this._business);

        const categories = cloneDeep(this._businessCategories);

        this.businessCategories.push({
            ...categories,
            business: business.filter(
                (business) => business.hasstar 
            ),
        });




        this.titleService.setTitle("Oman Online");
    }

    searchBusinesses() {
       if (this.searchKeyword) {
                this.router.navigate(['/businesses'], {
          queryParams: { q: this.searchKeyword }, 
        });
       } 

    }

    ngOnDestroy(): void {}
}
