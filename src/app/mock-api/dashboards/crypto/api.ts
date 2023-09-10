import { Injectable } from '@angular/core';
import { SeniorMockApiService } from '@senior/lib/mock-api';
import { cloneDeep } from 'lodash-es';
import { crypto as cryptoData } from 'app/mock-api/dashboards/crypto/data';

@Injectable({providedIn: 'root'})
export class CryptoMockApi
{
    private _crypto: any = cryptoData;

    /**
     * Constructor
     */
    constructor(private _seniorMockApiService: SeniorMockApiService)
    {
        // Register Mock API handlers
        this.registerHandlers();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register Mock API handlers
     */
    registerHandlers(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Crypto - GET
        // -----------------------------------------------------------------------------------------------------
        this._seniorMockApiService
            .onGet('api/dashboards/crypto')
            .reply(() => [200, cloneDeep(this._crypto)]);
    }
}
