import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository{

    private listaProdutos: Array<Produto> = new Array<Produto>();
    id: number = 0;

    procurarPorId(id: number): void{
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto != null)
            buscaProduto.visualizar();
        else
            console.log(colors.fg.red, "\nProduto não encontrado!", colors.reset);
    }
    listarTodos(): void {
        for(let produto of this.listaProdutos){
            produto.visualizar();
        }
    }
    cadastrar(produto: Produto): void{
        this.listaProdutos.push(produto);
        console.log(colors.fg.green, "\nO Produto ID " + produto.id + " foi cadastrado com sucesso!", colors.reset);
    }
    atualizar(produto: Produto): void{
        let buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto != null){
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green, "\nProduto atualizado com sucesso!", colors.reset);
        }else
            console.log(colors.fg.red, "\nProduto não encontrado!", colors.reset);
    }
    deletar(id: number): void{
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto != null){
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green, "\nProduto deletado com sucesso!", colors.reset);
        }else
            console.log(colors.fg.red, "\nProduto não encontrado!", colors.reset);
    }
    vender(id: number, quantidade: number): void{
        let produto = this.buscarNoArray(id);

        if(produto != null){
            if(produto.vender(quantidade))
                console.log(colors.fg.green, "\nVenda realizada com sucesso!", colors.reset);
        }else
            console.log(colors.fg.red, "\nProduto não encontrado!", colors.reset);
    }
    repor(id: number, quantidade: number): void{
        let produto = this.buscarNoArray(id);

        if(produto != null){
            produto.repor(quantidade);
            console.log(colors.fg.green, "\nEstoque atualizado!", colors.reset);
        }else
            console.log(colors.fg.red, "\nProduto não encontrado!", colors.reset);
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