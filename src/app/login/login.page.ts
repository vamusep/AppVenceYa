import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '@services/auth.service';

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
    private alertController: AlertController,
    private authService: AuthService
  ) {
    this.username = '';
    this.password = '';
  }
 //se agrega ojo para hacer que la contraseña se vuelva visible para el usuario
  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }

  //revisar si el user esta logeado para poder ingresar al home
  async login() {
    if (!this.username || !this.password) {
      const alert = await this.alertController.create({
        header: 'Ups! ⚠️',
        message: 'Por favor ingresa tu usuario y contraseña para poder ingresar',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }


    //usuarios guardados con localStorage
    const usuarios = localStorage.getItem('usuarios');
    const usuariosArray = usuarios ? JSON.parse(usuarios) : [];

    if (usuariosArray.length === 0) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'No hay usuarios registrados',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    const usuario = usuariosArray.find((user: any) => user.username === this.username && user.password === this.password);

    if (usuario) {
      localStorage.setItem('username', this.username);
      this.router.navigate(['/home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Horror!',
        message: 'Usuario o contraseña incorrectos🧐',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}
