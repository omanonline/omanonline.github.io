import { NgClass, NgIf } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { OmanOnlineConfirmationConfig } from '@omanonline/services/confirmation/confirmation.types';

@Component({
    selector     : 'omanonline-confirmation-dialog',
    templateUrl  : './dialog.component.html',
    styles       : [
        `
            .omanonline-confirmation-dialog-panel {

                @screen md {
                    @apply w-128;
                }

                .mat-mdc-dialog-container {

                    .mat-mdc-dialog-surface {
                        padding: 0 !important;
                    }
                }
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    standalone   : true,
    imports      : [NgIf, MatButtonModule, MatDialogModule, MatIconModule, NgClass],
})
export class OmanOnlineConfirmationDialogComponent
{
    /**
     * Constructor
     */
    constructor(@Inject(MAT_DIALOG_DATA) public data: OmanOnlineConfirmationConfig)
    {
    }

}
