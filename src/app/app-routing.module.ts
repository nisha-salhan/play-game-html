import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KenoComponent } from './keno/keno.component';
import { SPORTSComponent } from './sports/sports.component';
import { MSPORTSComponent } from './msports/msports.component';
import { LIVEComponent } from './live/live.component';
import { CASINOComponent } from './casino/casino.component';
import { BOXINGComponent } from './boxing/boxing.component';
import { COCKComponent } from './cock/cock.component';
import { PROMOTIONSComponent } from './promotions/promotions.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'keno', component: KenoComponent },
	{ path: 'casino', component: CASINOComponent },
	{ path: 'live', component: LIVEComponent },
	{ path: 'sports', component: SPORTSComponent },
	{ path: 'msports', component: MSPORTSComponent },
	{ path: 'cock', component: COCKComponent },
	{ path: 'boxing', component: BOXINGComponent },
	{ path: 'promotions', component: PROMOTIONSComponent },
	{ path: 'registration', component: RegistrationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
