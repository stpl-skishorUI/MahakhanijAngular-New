import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MahakhanijAngular-New';
  isBeforeLoginPage: boolean = true;
  isLoginPage: boolean = true;
  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.isLoginPage = event.urlAfterRedirects == '/login';
      }

      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
}
