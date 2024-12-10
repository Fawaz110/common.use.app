import { Component } from '@angular/core';

@Component({
  selector: 'app-cookies-collector-1',
  imports: [],
  templateUrl: './cookies-collector-1.component.html',
  styleUrl: './cookies-collector-1.component.scss',
})
export class CookiesCollector1Component {
  close(id: string) {
    let cookie = document.documentElement.querySelector('#' + id) as HTMLDivElement;
    cookie.classList.add('translate-y-full', 'opacity-0')
    setTimeout(() => {
      cookie.classList.add('hidden');
      cookie.classList.remove('translate-y-full', 'opacity-0');
    }, 200);
  }
}
