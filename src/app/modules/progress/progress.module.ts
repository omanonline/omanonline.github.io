import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProgressComponent } from './progress.component';
@NgModule({
    declarations: [
        ProgressComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
    ], exports: [
        ProgressComponent
    ]
})
export class ProgressModule {
}
