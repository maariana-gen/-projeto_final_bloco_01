import readlinesync = require("readline-sync");
import { ProdutoController } from "./src/controller/ProdutoController";
import { Cookie } from "./src/model/Cookie";
import { colors } from "./src/util/Colors";

export function main() {

    let opcao: number;
    let id: number;
    let nome: string;
    let tipo: number;
    let preco: number;
    let estoque: number;
    let sabor: string;
    const produtoController = new ProdutoController();
    const tiposCookies = ["Tradicional", "Recheado"];

    while(true){

        console.log("                                                     ");
        console.log(colors.fg.yellow, "*****************************************************", colors.reset);
        console.log("                                                     ");
        console.log(colors.fg.magenta, "                 OLIVEIRAS'S COOKIES                 ", colors.reset);
        console.log("                                                     ");
        console.log(colors.fg.yellow, "*****************************************************", colors.reset);
        console.log("                                                     ");
        console.log("            1 - Cadastrar Cookie                     ");
        console.log("            2 - Listar todos os Cookies              ");
        console.log("            3 - Buscar Cookie por ID                 ");
        console.log("            4 - Atualizar Cookie                     ");
        console.log("            5 - Apagar Cookie                        ");
        console.log("            6 - Vender Cookie                        ");
        console.log("            7 - Repor estoque                        ");
        console.log("            8 - Sair                                 ");
        console.log("                                                     ");
        console.log(colors.fg.yellow, "*****************************************************", colors.reset);
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 8){
            console.log(colors.fg.magenta, "\nOliveira's Cookie - Obrigado pela preferência!", colors.reset);
            process.exit(0);
        }

        switch (opcao){
            case 1:
                console.log("\nCadastrar Cookie\n");
                id = produtoController.gerarId();

                console.log("Digite o nome do Cookie: ");
                nome = readlinesync.question("");

                console.log("\nDigite o tipo do Cookie: ");
                tipo = readlinesync.keyInSelect(tiposCookies, "", { cancel: false }) + 1;

                console.log("\nDigite o preço do Cookie (R$): ");
                preco = readlinesync.questionFloat("");

                console.log("\nDigite a quantidade em estoque: ");
                estoque = readlinesync.questionInt("");

                console.log("\nDigite o sabor do Cookie: ");
                sabor = readlinesync.question("");

                produtoController.cadastrar(new Cookie(id, nome, tipo, preco, estoque, sabor));
                break;
            case 2:
                console.log("\nListar todos os Cookies\n");
                produtoController.listarTodos();
                break;
            case 3:
                console.log("\nBuscar Cookie por ID\n");
                let idBusca: number;

                console.log("Digite o ID do Cookie: ");
                idBusca = readlinesync.questionInt("");

                produtoController.procurarPorId(idBusca);
                break;
            case 4:
                console.log("\nAtualizar Cookie\n");
                console.log("Digite o ID do Cookie: ");
                id = readlinesync.questionInt("");

                let produto = produtoController.buscarNoArray(id);

                if (produto != null){
                    console.log("Digite o nome do Cookie: ");
                    nome = readlinesync.question("");

                    tipo = produto.tipo;

                    console.log("\nDigite o preço do Cookie (R$): ");
                    preco = readlinesync.questionFloat("");

                    console.log("\nDigite a quantidade em estoque: ");
                    estoque = readlinesync.questionInt("");

                    console.log("\nDigite o sabor do Cookie: ");
                    sabor = readlinesync.question("");

                    produtoController.atualizar(new Cookie(id, nome, tipo, preco, estoque, sabor));
                }else{
                    console.log(colors.fg.red, "\nProduto não encontrado!", colors.reset);
                }
                break;
            case 5:
                console.log("\nApagar Cookie\n");
                let idDeletar: number;

                console.log("Digite o ID do Cookie: ");
                idDeletar = readlinesync.questionInt("");

                produtoController.deletar(idDeletar);
                break;
            case 6:
                console.log("\nVender Cookie\n");
                let idVenda: number;
                let quantidadeVenda: number;

                console.log("Digite o ID do Cookie: ");
                idVenda = readlinesync.questionInt("");

                console.log("Digite a quantidade vendida: ");
                quantidadeVenda = readlinesync.questionInt("");

                produtoController.vender(idVenda, quantidadeVenda);
                break;
            case 7:
                console.log("\nRepor Estoque\n");
                let idRepor: number;
                let quantidadeRepor: number;

                console.log("Digite o ID do Cookie: ");
                idRepor = readlinesync.questionInt("");

                console.log("Digite a quantidade para repor: ");
                quantidadeRepor = readlinesync.questionInt("");

                produtoController.repor(idRepor, quantidadeRepor);
                break;
            default:
                console.log(colors.fg.red, "\nOpção Inválida!\n", colors.reset);
                break;
        }
    }

}
main();