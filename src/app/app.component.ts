import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean;
  menu?: HTMLElement | null;

  constructor() {
    this.loading = true;
  }

  setWaitTime():void {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

  handlerCloseMenu(): void {
    this.menu = document.querySelector('.mobile-menu');
    this.menu?.classList.remove('active');
    document.body.style.overflow="visible"
  }
}
