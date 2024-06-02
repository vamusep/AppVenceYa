import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    this.username = '';
    this.lastname = '';
    this.phone = '';
    this.password = '';
    this.confirmPassword = this.password;
    this.email = '';
  }

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

    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Yujuu!! Registro exitoso!😎',
      buttons: ['Aceptar']
    });
    await alert.present();
    this.router.navigate(['/login']); 
  }
}
