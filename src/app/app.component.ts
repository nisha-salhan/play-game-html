import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'my-app';
	navigaitonToggel = "";

	toggelNav() {
		if(this.navigaitonToggel === 'navigaitonToggel') {
			this.navigaitonToggel = "";
		} else {
			this.navigaitonToggel = "navigaitonToggel";
		}
	}
}
