dia 30/09

### pegar os valores conforme controles de quantidades e armazenar em um estado
- apos cada alteracao incluir ou remover produto de acordo com a quantidade, se for 0 remove e se for maior adiciona bem como atualiza a quantidade, o valor unitario e o valor total caso compre o mesmo item varias vezes


const Selecao = [
    {
        nome: "nome do produto",
        precoUni: {preco},
        quantidade: {quantidade},
        precoSubtotal: {quantidade * preco}
    }

]


## Proposta de melhoria - remover o item da segunda listagem se clicar na lixeira
### renderizar na segunda listagem a selecao do cliente
- Travado


### renderizar o total da selecao no estado total


### ao input do valor pago, vai ter um regex colocando "R$ " no inicio do input e separando as casas decimais
### se der match ele calcula o troco e renderiza no estado de troco


###  Verificar qual tipo de ticket sera usado para usuario
-Travado- 


### ao clicar em confirmar sera exibido uma caixa de dialogo para confirmar e depois uma mensagem de agradecimento
### nesse momento sera salvo o objeto da compra

const compras = [
    {
        dataDaCompra: new Date(),
        produtos: [
            {nome, preco, qtd},
            {nome, preco, qtd},
            {nome, preco, qtd}
        ],
        precoSubtotal: {quantidade * preco}
    }
]


