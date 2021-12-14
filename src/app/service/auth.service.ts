import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  /*entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      'http://localhost:8080/usuarios/logar',
      userLogin
    );
  }

  cadastrar(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'http://localhost:8080/usuarios/cadastrar',
      user
    );
  }

  atualizar(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `http://localhost:8080/usuarios/atualizar`,
      user,
      this.token
    );
  }

  getByIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`);
  }*/

  entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      'https://iande.herokuapp.com/usuarios/logar',
      userLogin
    );
  }

  cadastrar(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'https://iande.herokuapp.com/usuarios/cadastrar',
      user
    );
  }

  atualizar(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      `https://iande.herokuapp.com/usuarios/atualizar`,
      user,
      this.token
    );
  }

  getByIdUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://iande.herokuapp.com/usuarios/${id}`);
  }

  logado() {
    let ok = false;

    if (environment.token != '') {
      ok = true;
    }

    return ok;
  }
}
