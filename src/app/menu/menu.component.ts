import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  nome = environment.nome;
  foto = environment.foto;
  id = environment.id;

  constructor(
    private router: Router,
    public auth: AuthService,
    private alertas: AlertasService
  ) {}

  ngOnInit(): void {}

  sair() {
    this.alertas.showAlertInfo('Sessão encerrada.');
    this.router.navigate(['/entrar']);
    environment.token = '';
    environment.foto = '';
    environment.nome = '';
    environment.id = 0;
  }
}
