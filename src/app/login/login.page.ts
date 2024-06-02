import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string;
  password: string;

  constructor(
    private router: Router,
    //private authService: AuthService,
    private alertController: AlertController
  ) {
    this.username = '';
    this.password = '';
  }

  async login() {
    localStorage.setItem('username', this.username);
    this.router.navigate(['/home']);
  }
}