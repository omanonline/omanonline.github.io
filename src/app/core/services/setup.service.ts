/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SetupService {

    data: any;
    
    username: any;
    

    private readonly currentBusiness = new BehaviorSubject<string>('omanonline');
    readonly currentBusiness$ = this.currentBusiness.asObservable();
    initialized: any;
    multiChain: boolean;
 

    get current(): string {
        return this.currentBusiness.getValue();
    }

    set current(val: string) {
        this.currentBusiness.next(val);
    }

    constructor(
        private api: ApiService,
    ) {

    }

    async setUsername(username: string) {
        if (this.current === username) {
            // Update the chain subject, which should trigger consumers to do some processing.
            this.current = username;
            return;
        }
        // Make sure we have downloaded the setup before we trigger change.
        const data = await this.api.loadBusiness(username);
        this.data = data;
        this.username = this.data.info.username;

        // Update the chain subject, which should trigger consumers to do some processing.
        this.current = username;
        if (this.username?.Color) {
            document.documentElement.style.setProperty('--accent', this.username?.Color);
        }
        return null;
    }

     
 
}
