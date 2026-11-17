// Entrada de dados interativa usando prompt e +prompt
const valorCompra = +prompt("Digite o valor da compra (Ex: 250.00):");
const respostaVip = prompt("O cliente é VIP? (Digite 'sim' ou 'nao'):");
const clienteVip = respostaVip ? respostaVip.trim().toLowerCase() === "sim" : false;
const formaPagamento = prompt("Escolha a forma de pagamento (pix, boleto, credito, debito):");

console.log("=== RESUMO DO PEDIDO ===");
console.log(`Valor da Compra: R$ ${valorCompra.toFixed(2)}`);
console.log(`Cliente VIP: ${clienteVip ? "Sim" : "Não"}`);
console.log(`Forma de Pagamento: ${formaPagamento}`);
console.log("----------------------------------------");

// ETAPA 1: Cálculo de Benefício por Valor (Uso ideal de if / else if / else)
// Justificativa: Avalia faixas numéricas de valores e múltiplas condições lógicas combinadas (&&, ||).
if (valorCompra <= 0 || isNaN(valorCompra)) {
    console.log("Erro: Valor de compra inválido.");
} else {
    if (valorCompra < 100) {
        console.log("Frete padrão: R$ 20,00.");
    } else if ((valorCompra >= 100 && valorCompra <= 299.99) || clienteVip === true) {
        console.log("Benefício aplicado: Frete Grátis!");
    } else if (valorCompra >= 300 && clienteVip === false) {
        console.log("Benefício aplicado: Frete Grátis + 10% de desconto!");
    }

    // ETAPA 2: Processamento da Forma de Pagamento (Uso ideal de switch / case)
    // Justificativa: Ideal para correspondências exatas de valores fixos ou strings discretas.
    const pagamentoFormatado = formaPagamento ? formaPagamento.trim().toLowerCase() : "";

    switch (pagamentoFormatado) {
        case "pix":
            console.log("Status: Pagamento via Pix processado com sucesso!");
            break;
        case "boleto":
            console.log("Status: Boleto gerado com sucesso. Aguardando compensação.");
            break;
        case "credito":
            console.log("Status: Pagamento aprovado via Cartão de Crédito.");
            break;
        case "debito":
            console.log("Status: Pagamento aprovado via Cartão de Débito.");
            break;
        default:
            console.log("Aviso: Forma de pagamento não reconhecida ou inválida.");
            break;
    }
}

// Entrada de dados interativa usando prompt e +prompt
const categoriaChamado = prompt("Digite a categoria do chamado (financeiro, bug, acesso, duvida):");
const prejuizoEstimado = +prompt("Digite o prejuízo estimado em R$ (Ex: 5000.00):");
const respostaEnterprise = prompt("O cliente é Enterprise? (Digite 'sim' ou 'nao'):");
const clienteEnterprise = respostaEnterprise ? respostaEnterprise.trim().toLowerCase() === "sim" : false;

console.log("=== RESUMO DO TICKET ===");
console.log(`Categoria: ${categoriaChamado}`);
console.log(`Prejuízo Estimado: R$ ${prejuizoEstimado.toFixed(2)}`);
console.log(`Cliente Enterprise: ${clienteEnterprise ? "Sim" : "Não"}`);
console.log("----------------------------------------");

// ETAPA 1 — Roteamento de Departamento (Uso ideal de switch / case)
// Justificativa: Excelente para correspondências exatas de valores fixos ou strings discretas.
const categoriaFormatada = categoriaChamado ? categoriaChamado.trim().toLowerCase() : "";

switch (categoriaFormatada) {
    case "financeiro":
        console.log("Direcionando ticket para a equipe de Faturamento e Cobrança.");
        break;
    case "bug":
        console.log("Direcionando ticket para a Engenharia de Software (Nível 2).");
        break;
    case "acesso":
    case "duvida":
        console.log("Direcionando ticket para o Atendimento Geral (Nível 1).");
        break;
    default:
        console.log("Erro: Categoria de chamado inválida.");
        break;
}

// ETAPA 2 — Definição de Prioridade e SLA (Uso ideal de if / else if / else)
// Justificativa: Ideal para comparação de faixas numéricas e múltiplas condições lógicas combinadas (&&, ||).
if (prejuizoEstimado < 0 || isNaN(prejuizoEstimado)) {
    console.log("Erro: Valor de prejuízo inválido.");
} else if (prejuizoEstimado >= 10000 || clienteEnterprise === true) {
    console.log("Prioridade CRÍTICA: Atendimento imediato (SLA: 1 hora).");
} else if (prejuizoEstimado >= 1000 && prejuizoEstimado <= 9999.99 && clienteEnterprise === false) {
    console.log("Prioridade ALTA: Atendimento em até 4 horas.");
} else {
    console.log("Prioridade NORMAL: Atendimento em até 24 horas.");
}
