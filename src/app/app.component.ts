import { Component } from '@angular/core';
import { CookiesCollectorComponent } from "./Components/cookies-collector/cookies-collector.component";

@Component({
  selector: 'app-root',
  imports: [CookiesCollectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'common.use.app';
}
