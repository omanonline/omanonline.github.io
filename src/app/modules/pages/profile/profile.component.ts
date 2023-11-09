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
    Input,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
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
import { ClipboardModule, ClipboardService } from 'ngx-clipboard';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SafePipe } from 'app/core/pipe/safe.pipe';

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
        ClipboardModule,
        MatSnackBarModule,
        SafePipe,
    ],
})
export class ProfileComponent implements OnInit {
    currentBusinessInfo: any;
    category: any;
    categories: any;
    isSave: boolean = false;
    favorite: string[] = [];

    latitude = 37.7749; 
    longitude = -122.4194; 
    apiKey = 'AIzaSyBq3kl-Kaamu4uN-hCNgZ7o3ZmBwn-fTB0';
    mapsURL = `https://www.google.com/maps/embed/v1/view?key=${this.apiKey}&center=${this.latitude},${this.longitude}&zoom=15`;

    constructor(
        public setup: SetupService,
        private cd: ChangeDetectorRef,
        private metaService: Meta,
        private titleService: Title,
        private clipboardService: ClipboardService,
        private snackBar: MatSnackBar
    ) {
        const saved = localStorage.getItem('favoriteBusinesses');
        if (saved) {
            this.favorite = JSON.parse(saved);

            const index = this.favorite.indexOf(this.setup.current);

            if (index !== -1) {
                this.isSave = true;
            } else {
                this.isSave = false;
            }
        }
    }

    getGoogleMapsUrl(latitude: any, longitude: any)  {
        const mapUrl = `https://www.google.com/maps/embed/v1/view?key=${this.apiKey}&center=${latitude},${longitude}&zoom=15`;
        return mapUrl;
      }

    openGoogleMaps(latitude: any, longitude: any) {
        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(url, '_blank');
    }
    async ngOnInit(): Promise<void> {
        try {
            this.categories = await this.setup.getCategories();

            this.currentBusinessInfo = await this.setup.getBusiness(
                this.setup.current
            );

            console.log(this.currentBusinessInfo);

            this.titleService.setTitle(
                'Oman Online - ' + this.currentBusinessInfo.name
            );
            // this.category = this.currentBusinessInfo.categoryId;

            this.cd.detectChanges();
        } catch (error) {}
    }

    // getCategoryName(id: number): string {
    //     const category = this.categories.find((category) => category.id === id);
    //     return category ? category.title : 'Category not found';
    // }

    Save() {
        this.isSave = !this.isSave;
        const index = this.favorite.indexOf(this.setup.current);

        if (index !== -1) {
            this.favorite.splice(index, 1);
        } else {
            this.favorite.push(this.setup.current);
        }

        localStorage.setItem(
            'favoriteBusinesses',
            JSON.stringify(this.favorite)
        );
    }

    shareOnTelegram() {
        const currentURL = window.location.href;
        const message = `Check out this link: ${currentURL}`;
        const telegramURL = `tg://msg_url?url=${encodeURIComponent(
            currentURL
        )}&text=${encodeURIComponent(message)}`;
        window.open(telegramURL);
    }

    shareOnWhatsApp() {
        const currentURL = window.location.href;
        const message = `Check out this link: ${currentURL}`;
        const whatsappURL = `https://wa.me/?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappURL);
    }

    copyToClipboard() {
        const currentURL = window.location.href;
        this.clipboardService.copy(currentURL);
        this.snackBar.open('Link copied to clipboard', 'Close', {
            duration: 2000,
        });
    }

    downloadVCard() {
        const contactName = 'John Doe';
        const phoneNumber = '+1234567890';

        const vCardData = `BEGIN:VCARD
    VERSION:3.0
    FN:${contactName}
    TEL:${phoneNumber}
    END:VCARD`;

        const blob = new Blob([vCardData], { type: 'text/vcard' });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'contact.vcf';

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
    }
}
