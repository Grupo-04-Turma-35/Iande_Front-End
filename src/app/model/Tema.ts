import { Postagem } from "./Postagem"

export class Tema{
    public idtema: number
    public titulo: string
    public descricao: string
    public qtdtema: number
    public datatema: Date
    public postagem: Postagem[]
}