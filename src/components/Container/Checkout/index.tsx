import { useEffect, useState } from "react"

import { Title, Text, ModalContainer, ModalPagamentoContent } from "../styles"
import { 
    CheckoutContainer, 
    ListContent, 
    ListProducts, 
    ListSelected, 
    ListItem, 
    SubtotalContainer1, 
    SubtotalContainer2, 
    InputPagamento, 
    DotsContainer,
    BtnConfirm,
    ControlerProduct,
    ProductsSelecteds,
    ContainerCalculate,
    PagamentoContainer,
    PaymentMethodsContainer,
    PaymentMethod,
    SelectedMethod,
    LoadingContainer,
    PayDoutContainer,
    FishedPaymentTitle,
    FinishedContainer
} from "./styles"
import { Produto, ProdutoSelecionado/*, Venda */} from "../../../types/produto"
import { MinusCircle, PlusCircle } from "@phosphor-icons/react"
import CloseImg from '../../../assets/X.svg'
import LoadingIcon from '../../../assets/CircleNotch.svg'
import FinishedIcon from '../../../assets/PaymentAproved.svg'

// @ts-ignore


export const Checkout = () => {




    const [total, setTotal] = useState(0)
    // const [pagamento, setPagamento] = useState(0)
    const [troco, setTroco] = useState(0)
    const [quantidades, setQuantidades] = useState<any>({});
    const [productList, setProductList] = useState<Produto[]>([])
    const [selectedList, setSelectedList] = useState<ProdutoSelecionado[]>([])
    const [modalPagamento, setModalPagamento] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState<string | null>(null)
    const [payout, setPayout] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{

        let produtos = localStorage.getItem("produtos")
        if(produtos){

            setProductList(JSON.parse(produtos))
        }
        setTroco(0) // chamando pra evitar erro no build :(
    }, [])

    useEffect(()=>{
        setTotal(selectedList.reduce((acumulador, currentValue)=> acumulador + currentValue.precoUni * currentValue.qtdEscolhida, 0))
    },[selectedList, quantidades])


    


    const handleMinusClick = (id: number /*,productName: string, preco: number, qtd:number*/) => {
        // Obtenha a quantidade atual do produto com base no ID
        const currentQuantity = quantidades[id] || 0;
        
        // Verifique se a quantidade atual é maior que 0 antes de diminuí-la
        if (currentQuantity > 0) {
        const newQuantity = currentQuantity - 1;
        // Atualize o estado com a nova quantidade
        setQuantidades({
            ...quantidades,
            [id]: newQuantity,
      });
      updateSelectedItems(id, "REMOVE", 1)
    }

    };
    
      // Função para lidar com o clique em 'plus'
    const handlePlusClick = (id: number /*,productName: string, preco: number, qtd:number = 1*/) => {
        // Obtenha a quantidade atual do produto com base no ID
        const currentQuantity = quantidades[id] || 0;
        
        const newQuantity = currentQuantity + 1;
        // Atualize o estado com a nova quantidade
        setQuantidades({
        ...quantidades,
        [id]: newQuantity,
        });
        updateSelectedItems(id, "ADD", 1)
    };


    const updateSelectedItems = (itemId: number, action: string, quantidade: number) => {
    switch (action){
        case 'REMOVE':
            setSelectedList(prevList => {
                // Encontre o item pelo id
                const selectedItem = prevList.find(item => item.id === itemId);
        
                if (!selectedItem) {
                // Se o item não for encontrado, retorne a lista original
                    return prevList;
                }
        
                if (selectedItem.qtdEscolhida > 1) {
                // Se o valor do item for maior que 1, apenas decremente-o
                    return prevList.map(item =>
                        item.id === itemId ? { ...item, qtdEscolhida: item.qtdEscolhida - 1 } : item
                    );
                } else {
                // Se o valor do item for igual a 1, remova-o da lista
                    return prevList.filter(item => item.id !== itemId);
                }
            });
            console.log("Removendo flanvers", selectedList.findIndex(element => element.id == itemId))
            // remover item pelo id e atualizar quantidade
            // setSelectedList()
            console.log("Removendo ...", productList.filter(item => item.id == itemId ))
            break;
        case 'ADD':
            console.log("Adicionando flanvers", selectedList.findIndex(element => element.id == itemId))
            if((selectedList.findIndex(element => element.id == itemId)) != -1){
                setSelectedList(prevItems => prevItems.map(item => {
                    if(item.id === itemId){
                        return {...item, qtdEscolhida: item.qtdEscolhida++}
                    }
                    return item
                }))
                console.log("TEm o item, atualizar")
                console.log("Atualizando o valor", productList.filter(item => item.id == itemId ))
            }else{
                const itemSelecionado = productList.filter(item => item.id == itemId )
                // adicionar item
                const copyList = selectedList
                copyList.push({
                    id: itemSelecionado[0].id,
                    name: itemSelecionado[0].name,
                    qtdEscolhida: quantidade,
                    precoUni: itemSelecionado[0].preco
                })
                setSelectedList(copyList)
                console.log("Nao Tem o item ")
            }
            // adicionar item pelo id e atualizar quantidade
            // setSelectedList()
            // console.log("Lista de selecionados ...", selectedList)
            break;
        default:
            break;
    }
    } 

    const handleChangePaymentMethod = (method: string) => {
        switch (method) {
            case "pix":
                setPaymentMethod(method)
                break;
            case "cartao":
                setPaymentMethod(method)
                break;
            case "dinheiro":
                setPaymentMethod(method)
                break;
            default:
                break;
        }
    }


    const handleFinish = () => {
        setPayout(true)
        setLoading(true)

        setTimeout(()=>{
            setLoading(false)
            setQuantidades(0)
            setSelectedList(prevlist => prevlist.filter(item => item.id == null))
        }, 2000)
    }
    return (

        <CheckoutContainer>
            <ListProducts>
                <Title>Lista de produtos</Title>
                <ListContent>
                    {productList.map(produto => (
                        <ListItem key={produto.name}>
                            <Text>{produto.name} </Text>
                            <ControlerProduct>
                                
                                <span>R$ {(produto.preco).toFixed(2)}</span>  
                                <span><MinusCircle size={20} onClick={
                                    ()=>{handleMinusClick(produto.id/* ,produto.name, produto.preco, 1*/)}
                                } /> <span>{quantidades[produto.id] || 0}</span><PlusCircle size={20} onClick={
                                    ()=>{handlePlusClick(produto.id/* ,produto.name, produto.preco, 1*/)}
                                } /></span>
                            </ControlerProduct>
                            
                        </ListItem>
                    ))}
                    {/* {dataFake.map(product => (
                    ))} */}
                </ListContent>
                <SubtotalContainer1>
                    Total <b>R${total.toFixed(2)}</b>
                </SubtotalContainer1>
            </ListProducts>
            <ListSelected>
                
                {/* <Title>Valor pago</Title>
                <InputPagamento /> */}
                <ContainerCalculate>
                    <ProductsSelecteds>
                        <Title>Items Selecionados</Title>
                        <div>

                            {selectedList.map(product => (
                                <ListItem key={product.id}>{product.name} <p>R${((product.precoUni) * product.qtdEscolhida).toFixed(2)} ------------- {product.qtdEscolhida} x</p></ListItem>
                                ))}

                        </div>
                    </ProductsSelecteds>
                    <DotsContainer>
                        <Title>Dots</Title>
                        {/* <ListItem>
                            <Text>R$10,00</Text>
                            <Text>1x</Text>
                        </ListItem> */}
                    </DotsContainer>
                </ContainerCalculate>
                <SubtotalContainer2>
                    <Text>Total <b>R${total.toFixed(2)}</b></Text>
                    <Text>Troco <b>R${troco.toFixed(2)}</b></Text>
                    <BtnConfirm onClick={()=>{
                        if(selectedList.length > 0){
                            setModalPagamento(true)
                        }
                    }}>Confirmar</BtnConfirm>
                </SubtotalContainer2>
            </ListSelected>
            {modalPagamento &&
                <ModalContainer>

                        <ModalPagamentoContent>

                            {!payout &&
                                <>
                                    <img onClick={()=>{
                                        setModalPagamento(false)
                                    }} src={CloseImg} alt="" />
                                    <PagamentoContainer>
                                        <div>
                                            <Title>Forma de pagamento</Title>
                                            <PaymentMethodsContainer>
                                                {paymentMethod != "pix" ? 
                                                    <PaymentMethod onClick={()=>{
                                                        handleChangePaymentMethod("pix")
                                                    }}>PIX</PaymentMethod>
                                                    : <SelectedMethod>PIX</SelectedMethod>
                                                }
                                                {paymentMethod != "cartao" ? 
                                                    <PaymentMethod onClick={()=>{
                                                        handleChangePaymentMethod("cartao")
                                                    }}>Cartao</PaymentMethod>
                                                    : <SelectedMethod>Cartao</SelectedMethod>
                                                }
                                                {paymentMethod != "dinheiro" ? 
                                                    <PaymentMethod onClick={()=>{
                                                        handleChangePaymentMethod("dinheiro")
                                                    }}>Dinheiro</PaymentMethod>
                                                    : <SelectedMethod>Dinheiro</SelectedMethod>
                                                }
                                            </PaymentMethodsContainer>
                                        </div>
                                        <div>
                                            <Title>Valor pago</Title>
                                            <InputPagamento />
                                        </div>
                                        <div>
                                            <Title>Troco</Title>
                                            <InputPagamento disabled />
                                        </div>
                                        <BtnConfirm onClick={()=>{
                                            handleFinish()
                                        }}>Finalizar</BtnConfirm>
                                    </PagamentoContainer>
                                </>
                            }
                            {payout &&
                                // pago -- setar loading, depois de 2s remover
                                <>
                                    <img onClick={()=>{
                                        setModalPagamento(false)
                                        setPayout(false)
                                    }} src={CloseImg} alt="" />
                                    <PayDoutContainer>
                                        {loading &&
                                            <LoadingContainer>
                                                <img src={LoadingIcon} alt="" />
                                            </LoadingContainer>
                                        }
                                        {!loading &&
                                            <FinishedContainer>
                                                <FishedPaymentTitle>Muito obrigado</FishedPaymentTitle>
                                                <img src={FinishedIcon} alt="" />
                                            </FinishedContainer>
                                            
                                        }
                                    </PayDoutContainer>
                                </>
                            }
                        
                    </ModalPagamentoContent>
                    
                </ModalContainer>
            }
        </CheckoutContainer>
        
    )
}