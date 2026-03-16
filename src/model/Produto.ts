import { colors } from "../util/Colors";

export abstract class Produto{

    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;
    private _estoque: number;

    constructor(id: number, nome: string, tipo: number, preco: number, estoque: number){
        this._id = id;
        this._nome = nome;
        this._tipo = tipo;
        this._preco = preco;
        this._estoque = estoque;
    }

    public get id(){
        return this._id;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(nome: string){
        this._nome = nome;
    }

    public get tipo(){
        return this._tipo;
    }

    public set tipo(tipo: number){
        this._tipo = tipo;
    }

    public get preco(){
        return this._preco;
    }

    public set preco(preco: number){
        this._preco = preco;
    }

    public get estoque(){
        return this._estoque;
    }

    public set estoque(estoque: number){
        this._estoque = estoque;
    }

    public vender(quantidade: number): boolean{

        if (this._estoque < quantidade){
            console.log(colors.fg.red, "\nEstoque insuficiente!", colors.reset);
            return false;
        }

        this._estoque = this._estoque - quantidade;
        return true;
    }

    public repor(quantidade: number): void{
        this._estoque = this._estoque + quantidade;
    }

    public visualizar(): void{

        console.log(colors.fg.yellow, "\n\n*****************************************************", colors.reset);
        console.log(colors.fg.magenta, "Dados do Produto:", colors.reset);
        console.log(colors.fg.yellow, "*****************************************************", colors.reset);
        console.log("ID do produto: " + this._id);
        console.log("Nome: " + this._nome);
        console.log("Tipo: " + this._tipo);
        console.log("Preço: " + this._preco.toFixed(2));
        console.log("Estoque: " + this._estoque);

    }

}