import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service'; //nuevo


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})

export class RegistroPage {
  username: string;
  lastname: string;
  phone: string;
  password: string;
  confirmPassword: string;
  email: string;
  passwordType: string = 'password';
  confirmPasswordType: string = 'password';
  passwordIcon: string = 'eye-off';
  confirmPasswordIcon: string = 'eye-off';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private authService: AuthService //nuevo
  ) 
    {
    this.username = '';
    this.lastname = '';
    this.phone = '';
    this.password = '';
    this.confirmPassword = this.password;
    this.email = '';
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

  toggleConfirmPasswordVisibility() {
    if (this.confirmPasswordType === 'password') {
      this.confirmPasswordType = 'text';
      this.confirmPasswordIcon = 'eye';
    } else {
      this.confirmPasswordType = 'password';
      this.confirmPasswordIcon = 'eye-off';
    }
  }

  //se utiliza authService para la comprobacion del password al registrar un usuario
  async registro() {
    if (this.password !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error😥',
        message: 'Las contraseñas no coinciden',
        buttons: ['Intentalo otra vez']
      });
      await alert.present();
      return;
    }

    if (!this.authService.validatePassword(this.password)) {
      const alert = await this.alertController.create({
        header: 'Error😥',
        message: 'Ojo! La contraseña debe tener al menos 8 caracteres, una mayúscula y un número',
        buttons: ['Intentalo otra vez']
      });
      await alert.present();
      return;
    }


    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Yujuu!! Registro exitoso!😎',
      buttons: ['Aceptar']
    });
    await alert.present();
    this.router.navigate(['/login']); 
  }
}
