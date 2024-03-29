import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root',
})
export class TemaService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  /*getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>('http://localhost:8080/temas', this.token);
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(`http://localhost:8080/temas/${id}`, this.token);
  }

  getByNomeTema(nome: string): Observable<Tema[]> {
    return this.http.get<Tema[]>(
      `http://localhost:8080/temas/titulo/${nome}`,
      this.token
    );
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>(
      'http://localhost:8080/temas',
      tema,
      this.token
    );
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>('http://localhost:8080/temas', tema, this.token);
  }

  deleteTema(id: number) {
    return this.http.delete(`http://localhost:8080/temas/${id}`, this.token);
  }*/

  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>(
      'https://iande.herokuapp.com/temas',
      this.token
    );
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>(
      `https://iande.herokuapp.com/temas/${id}`,
      this.token
    );
  }

  getByNomeTema(nome: string): Observable<Tema[]> {
    return this.http.get<Tema[]>(
      `https://iande.herokuapp.com/temas/titulo/${nome}`,
      this.token
    );
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>(
      'https://iande.herokuapp.com/temas',
      tema,
      this.token
    );
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>(
      'https://iande.herokuapp.com/temas',
      tema,
      this.token
    );
  }

  deleteTema(id: number) {
    return this.http.delete(
      `https://iande.herokuapp.com/temas/${id}`,
      this.token
    );
  }
}
