import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

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

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
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

    constructor(private setup: SetupService) {}

    async ngOnInit(): Promise<void> {
        this._businessCategories = await this.setup.getCategories();
        this._business = await this.setup.getBusinesses();
    }

    ngOnDestroy(): void {}
}
