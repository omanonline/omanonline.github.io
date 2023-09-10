import { Injectable } from '@angular/core';
import { SeniorDrawerComponent } from '@senior/components/drawer/drawer.component';

@Injectable({providedIn: 'root'})
export class SeniorDrawerService
{
    private _componentRegistry: Map<string, SeniorDrawerComponent> = new Map<string, SeniorDrawerComponent>();

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
    registerComponent(name: string, component: SeniorDrawerComponent): void
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
    getComponent(name: string): SeniorDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
