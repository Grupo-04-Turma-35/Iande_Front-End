import { Tema } from './Tema';
import { Usuario } from './Usuario';

export class Postagem {
  public idpostagem: number;
  public titulo: string;
  public texto: string;
  public imagem: string;
  public datapostagem: Date;
  public curtidas: number;
  public tema: Tema;
  public usuario: Usuario;
}
