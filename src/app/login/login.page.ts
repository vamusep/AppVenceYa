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
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    this.username = '';
    this.password = '';
  }

  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }

  async login() {
    localStorage.setItem('username', this.username);
    this.router.navigate(['/home']);
  }
}