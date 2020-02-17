import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PopUpInfoComponent} from './pop-up-info.component';
import {PopUp} from '../pop-up/pop-up.module';
@NgModule({
    declarations: [PopUpInfoComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        PopUp,
    ],
    exports: [PopUpInfoComponent]
})
export class PopUpInfo { }
