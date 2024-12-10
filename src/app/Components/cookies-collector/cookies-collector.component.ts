import { Component } from '@angular/core';
import { CookiesCollector1Component } from "./cookies-collector-1/cookies-collector-1.component";

@Component({
  selector: 'app-cookies-collector',
  imports: [CookiesCollector1Component],
  templateUrl: './cookies-collector.component.html',
  styleUrl: './cookies-collector.component.scss'
})
export class CookiesCollectorComponent {
  toggleDir() {
    let html = document.documentElement;

    if (html.getAttribute('dir') == 'ltr')
      html.setAttribute('dir', 'rtl');
    else
      html.setAttribute('dir', 'ltr');
  }
  toggleMode() {
    let html = document.documentElement;

    if (html.classList.contains('dark'))
      html.classList.remove('dark');
    else
      html.classList.add('dark');
  }
}
