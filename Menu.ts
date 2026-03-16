import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                 OLIVEIRAS'S COOKIES                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
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
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 8){
            console.log("\nOliveira's Cookie - Obrigado pela preferência!");
            process.exit(0);
        }

        switch (opcao){
            case 1:
                console.log("\nCadastrar Cookie\n");
                break;
            case 2:
                console.log("\nListar todos os Cookies\n");
                break;
            case 3:
                console.log("\nBuscar Cookies por ID\n");
                break;
            case 4:
                console.log("\nAtualizar Cookie\n");
                break;
            case 5:
                console.log("\nApagar Cookie\n");
                break;
            case 6:
                console.log("\nVender Cookie\n");
                break;
            case 7:
                console.log("\nRepor Estoque\n");
                break;
            default:
                console.log("\nOpção Inválida!\n");
                break;
        }
    }

}

main();