import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  //variables
  nombreUsuario: string;
  alimentos: any[];
  alimentosGuardados: any[];
  //agregar variable para eliminar alimentoos

  constructor() {
    this.nombreUsuario = localStorage.getItem('username') || 'Usuario';
    this.alimentos = [{ marca: '', producto: '', fechaCaducidad: '' }];
    this.alimentosGuardados = [];
  }

  guardarAlimentos() {
    this.alimentosGuardados = this.alimentos;
    this.alimentos = [];
  }
}
