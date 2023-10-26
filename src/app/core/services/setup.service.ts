/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SetupService {
    currentBusinessInfo: any;
    Categories: any;
    Businesses: any;
    username: any;

    private readonly currentBusiness = new BehaviorSubject<string>(
        'omanonline'
    );
    readonly currentBusiness$ = this.currentBusiness.asObservable();
    initialized: any;
    multiChain: boolean;

    get current(): string {
        return this.currentBusiness.getValue();
    }

    set current(val: string) {
        this.currentBusiness.next(val);
    }

    constructor(private api: ApiService) {}

    async getBusiness(username: string) {
        // if (this.current === username) {
        //     // Update the chain subject, which should trigger consumers to do some processing.
        //     this.current = username;
        //     return;
        // }
        // Make sure we have downloaded the setup before we trigger change.
        const data = await this.api.loadBusiness(username);

        this.currentBusinessInfo = data.information;
 
        return this.currentBusinessInfo;
        // Update the chain subject, which should trigger consumers to do some processing.
        this.current = username;
        // if (this.username?.Color) {
        //     document.documentElement.style.setProperty(
        //         '--accent',
        //         this.username?.Color
        //     );
        // }
        return null;
    }
    async getCategories() {
        const data = await this.api.loadCategories();
        this.Categories = data.categories;
        return this.Categories;
    }

    async getBusinesses() {
        const data = await this.api.loadBusinesses();
        this.Businesses = data.businesses;
        return this.Businesses;
    }
}
