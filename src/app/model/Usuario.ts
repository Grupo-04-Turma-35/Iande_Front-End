import { Postagem } from "./Postagem"

export class Usuario{
    public idusuario: number
    public email: string
    public nome: string
    public senha: string
    public foto: string
    public tipo: string
    public postagem: Postagem[]
}