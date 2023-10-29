import { TextFieldModule } from '@angular/cdk/text-field';
import {
    CommonModule,
    CurrencyPipe,
    NgClass,
    NgFor,
    NgIf,
} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { OmanOnlineCardComponent } from '@omanonline/components/card';
import { SetupService } from 'app/core/services/setup.service';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        OmanOnlineCardComponent,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatTabsModule,
        MatFormFieldModule,
        MatInputModule,
        TextFieldModule,
        MatDividerModule,
        MatTooltipModule,
        NgClass,
    ],
})
export class ProfileComponent implements OnInit {
    currentBusinessInfo: any;
    category: any;

    constructor(
        public setup: SetupService,
        private cd: ChangeDetectorRef,
        private metaService: Meta,
        private titleService: Title
    ) {}

 

    async ngOnInit(): Promise<void> {
        try {
            this.currentBusinessInfo = await this.setup.getBusiness(
                this.setup.current
            );
            this.titleService.setTitle(
                'Oman Online - ' + this.currentBusinessInfo.name
            );
            this.category = this.currentBusinessInfo;
               
         
            console.log(this.category);

            this.cd.detectChanges();
        } catch (error) {}
    }
}
