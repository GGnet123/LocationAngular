import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PopUp } from './pop-up/pop-up.module';
import {PopUpInfo} from './pop-up-info/pop-up-info.module';
import {ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
      AppComponent,
      TestComponent,
  ],
    imports: [
        PopUpInfo,
        PopUp,
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyB0IswlL9RmRK6iOgT2JBoBoGp9EQAURaA'
        }),
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
