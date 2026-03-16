import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{

    private listaProdutos: Array<Produto> = new Array<Produto>();
    id: number = 0;

    procurarPorId(id: number): void{
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto != null)
            buscaProduto.visualizar();
        else
            console.log("\nProduto não encontrado!");
    }
    listarTodos(): void {
        for(let produto of this.listaProdutos){
            produto.visualizar();
        }
    }
    cadastrar(produto: Produto): void{
        this.listaProdutos.push(produto);
        console.log("\nO Produto ID " + produto.id + " foi cadastrado com sucesso!");
    }
    atualizar(produto: Produto): void{
        let buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto != null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log("\nProduto atualizado com sucesso!");
        }else
            console.log("\nProduto não encontrado!");
    }
    deletar(id: number): void{
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto != null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log("\nProduto deletado com sucesso!");
        }else
            console.log("\nProduto não encontrado!");
    }
    vender(id: number, quantidade: number): void{
        let produto = this.buscarNoArray(id);

        if(produto != null){
            if(produto.vender(quantidade))
                console.log("\nVenda realizada com sucesso!");
        }else
            console.log("\nProduto não encontrado!");
    }
    repor(id: number, quantidade: number): void{
        let produto = this.buscarNoArray(id);

        if(produto != null){
            produto.repor(quantidade);
            console.log("\nEstoque atualizado!");
        }else
            console.log("\nProduto não encontrado!");
    }

    public gerarId(): number{
        return ++ this.id;
    }

    public buscarNoArray(id:number): Produto | null{
        for(let produto of this.listaProdutos){
            if(produto.id === id)
                return produto;
        }

        return null;
    }

}