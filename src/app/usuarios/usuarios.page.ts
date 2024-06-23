import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios: any[] = [];

  constructor(private alertController: AlertController) {}

  ngOnInit() {
    this.loadUsuarios();
  }

  loadUsuarios() {
    let usuarios = localStorage.getItem('usuarios');
    this.usuarios = usuarios ? JSON.parse(usuarios) : [];
  }

  async deleteUsuario(index: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar Eliminacion',
      message: '¿seguro que quieres eliminar este usuario?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.usuarios.splice(index, 1);
            localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
          }
        }
      ]
    });
    await alert.present();
  }

  async editUsuario(index: number) {
    const usuario = this.usuarios[index];
    const alert = await this.alertController.create({
      header: 'Editar Usuario',
      inputs: [
        {
          name: 'username',
          type: 'text',
          value: usuario.username,
          placeholder: 'Nombre de usuario'
        },
        {
          name: 'email',
          type: 'email',
          value: usuario.email,
          placeholder: 'Email'
        },
        {
          name: 'password',
          type: 'password',
          value: usuario.password,
          placeholder: 'Contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: (data) => {
            this.usuarios[index] = {
              username: data.username,
              email: data.email,
              password: data.password
            };
            localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
          }
        }
      ]
    });
    await alert.present();
  }
}
