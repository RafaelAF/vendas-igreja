export type Produto = {
    id: number,
    name: string,
    preco: number,
    qtd: number
}

export type ProdutoSelecionado = {
    id: number,
    name: string,
    precoUni: number,
    qtdEscolhida: number
}

export type Venda = {
    id: number, // timestamp
    produtos: ProdutoSelecionado[],
    valorPago: number,
    tipoPagamento: string,
    troco: boolean,
    valorTroco: number // se n tiver sera 0
}

export type TypePaymentMethod = {
    method: "pix" | "cartao" | "dinheiro"
}