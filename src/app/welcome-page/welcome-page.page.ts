import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage {
 constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
