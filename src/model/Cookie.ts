import { Produto } from "./Produto";

export class Cookie extends Produto{

    private _sabor: string;

    constructor(id: number, nome: string, tipo: number, preco: number, estoque: number, sabor:string){
        super(id, nome, tipo, preco, estoque);
        this._sabor = sabor;
    }
    
    public get sabor(){
        return this._sabor;
    }

    public set sabor(sabor: string){
        this._sabor = sabor;
    }

    public visualizar(): void {
        super.visualizar();
        console.log("Sabor do Cookie: " + this._sabor);
    }

}