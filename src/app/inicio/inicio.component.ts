import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  postagem: Postagem = new Postagem();
  listPostagens: Postagem[];
  tituloPost: string;

  tema: Tema = new Tema();
  listTemas: Tema[];
  idTema: number;
  nomeTema: string;

  usuario: Usuario = new Usuario();
  idUsuario = environment.id;

  key = 'data';
  reverse = true;

  nome = environment.nome;
  foto = environment.foto;

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    public authService: AuthService,
    private alertas: AlertasService
  ) {}

  ngOnInit() {
    if (environment.token == '') {
      this.alertas.showAlertInfo('Sua sessão expirou! Faça o login novamente.');
      this.router.navigate(['/entrar']);
    }

    this.getAllTemas();
    this.getAllPostagens();
  }

  getAllTemas() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.listTemas = resp;
    });
  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listPostagens = resp;
    });
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
    });
  }

  publicar() {
    this.tema.idtema = this.idTema;
    this.postagem.tema = this.tema;

    this.usuario.idusuario = this.idUsuario;
    this.postagem.usuario = this.usuario;

    this.postagemService
      .postPostagem(this.postagem)
      .subscribe((resp: Postagem) => {
        this.postagem = resp;
        this.alertas.showAlertSuccess('Postagem criada com sucesso!');
        this.postagem = new Postagem();
        this.getAllPostagens();
      });
  }
  findByTituloPostagem() {
    if (this.tituloPost == '') {
      this.getAllPostagens();
    } else {
      this.postagemService
        .getByTituloPostagem(this.tituloPost)
        .subscribe((resp: Postagem[]) => {
          this.listPostagens = resp;
        });
    }
  }

  findByNomeTema() {
    if (this.nomeTema == '') {
      this.getAllTemas();
    } else {
      this.temaService
        .getByNomeTema(this.nomeTema)
        .subscribe((resp: Tema[]) => {
          this.listTemas = resp;
        });
    }
  }
}
