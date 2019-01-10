import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { KenoComponent } from './keno/keno.component';
import { SPORTSComponent } from './sports/sports.component';
import { LIVEComponent } from './live/live.component';
import { CASINOComponent } from './casino/casino.component';
import { PROMOTIONSComponent } from './promotions/promotions.component';
import { BOXINGComponent } from './boxing/boxing.component';
import { COCKComponent } from './cock/cock.component';
import { MSPORTSComponent } from './msports/msports.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KenoComponent,
    SPORTSComponent,
    LIVEComponent,
    CASINOComponent,
    PROMOTIONSComponent,
    BOXINGComponent,
    COCKComponent,
    MSPORTSComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
