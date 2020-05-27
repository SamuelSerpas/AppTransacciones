import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'https://api-test.acomi.coop';

  constructor(
    private http: HttpClient, private router: Router) 
  { }

  
  signIn(user) {
    const path = `${this.api}/auth`;
    return this.http.post(path,  user, {headers: {'Content-Type': 'application/json'}})
  }

  getAllAsociado() {
    const path = `${this.api}/api/clientes`;
    return this.http.get<any>(path);
  }
   
  getAsociados(id: string){
    const path = `${this.api}/api/clientes/${id}`;
    return this.http.get<any>(path);
  }

  getToken(){
    return localStorage.getItem('token');
  }
  
  loggedIn(){
    return !!localStorage.getItem('token');
    }
  
    loggout(){
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    }
}
