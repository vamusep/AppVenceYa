import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: any = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private alertController: AlertController) {}

  ngOnInit() {
    this.cargarPerfil();
  }

  cargarPerfil() {
    let usuarios = localStorage.getItem('usuarios');
    if (usuarios) {
      let usuariosArray = JSON.parse(usuarios);
      if (usuariosArray.length > 0) {
        this.usuario = usuariosArray[0]; 
      }
    }
  }

  async guardarPerfil() {
    let usuarios = localStorage.getItem('usuarios');
    if (usuarios) {
      let usuariosArray = JSON.parse(usuarios);
      usuariosArray[0] = this.usuario;
      localStorage.setItem('usuarios', JSON.stringify(usuariosArray));

      const alert = await this.alertController.create({
        header: 'Perfil actualizado ',
        message: 'Tu perfil ha sido actualizado correctamente 😎',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
}
