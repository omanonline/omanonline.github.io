import { Injectable } from '@angular/core';
import { OmanOnlineDrawerComponent } from '@omanonline/components/drawer/drawer.component';

@Injectable({providedIn: 'root'})
export class OmanOnlineDrawerService
{
    private _componentRegistry: Map<string, OmanOnlineDrawerComponent> = new Map<string, OmanOnlineDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: OmanOnlineDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): OmanOnlineDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
