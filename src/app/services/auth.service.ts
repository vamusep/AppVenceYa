import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: { username: string, password: string }[] = [];

  constructor() { }

  registro(username: string, password: string): boolean {
    if (this.users.find(user => user.username === username)) {
      return false; //si el user ya existe
    }
    this.users.push({ username, password });
    return true;
  }

  authenticate(username: string, password: string): boolean {
    const user = this.users.find(user => user.username === username && user.password === password);
    return !!user;
  }

  //para validar los requerimientos del password
  validatePassword(password: string): boolean {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return password.length >= minLength && hasUpperCase && hasNumber;
  }
}
