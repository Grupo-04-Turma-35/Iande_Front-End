import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlertasComponent } from './alertas/alertas.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastrarComponent,
    EntrarComponent,
    HomeComponent,
    MenuHomeComponent,
    InicioComponent,
    AlertasComponent,
    TemaComponent,
    TemaEditComponent,
    PostagemEditComponent,
    UserEditComponent,
    TemaDeleteComponent,
    PostagemDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
