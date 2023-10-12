import { Checkout } from "./Checkout"
import { 
    ContainerCaixa, 
    Title, 
    ContentTitle, 
    ConfigButton, 
    ModalContainer, 
    ModalContent,
    EditContainer,
    EditProductsContainer, Text, LabelContainer, ConfigButtonsContainer} from "./styles"

import ConfigImg from '../../assets/Vector.svg'
import CloseImg from '../../assets/X.svg'
import CashIcon from '../../assets/cashIcon.svg'
import { useEffect, useState } from "react"
import { BtnConfirm, InputDefault, ListContent, ListItem, PayDoutContainer } from "./Checkout/styles"



import { Produto } from "../../types/produto"
import { Relatorio } from "./Relatorio"

export const Container = () => {


    const [showModal, setShowModal] = useState(false)
    const [showFinancas, setShowFinancas] = useState(false)

    const [name, setName] = useState('')
    const [preco, setPreco] = useState<number>(0)
    const [qtd, setqtd] = useState<number>(0)

    const [productList, setProductList] = useState<Produto[]>([])

    // const [getVendas, setGetVendas] = useState<any>('')


    useEffect(()=>{
        let produtosData = localStorage.getItem("produtos")
        if(produtosData){
            setProductList(JSON.parse(produtosData))
        }
        // setGetVendas(localStorage.getItem("total-vendido"))
    }, [])


    
    const handleSaveProduct = () => {
        if (name && preco !== 0 && qtd > 0) {
          
      
          // Verifique se "produtos" já existe no localStorage
          let produtos: Produto[] = [];
          const storedProdutos = localStorage.getItem("produtos");
          if (storedProdutos) {
            produtos = JSON.parse(storedProdutos);
          }
          const obj: Produto = {
            id: (produtos.length + 1),
            name,
            preco,
            qtd,
          };
      
          // Verifique se já existe um produto com o mesmo nome no array
          const exists = produtos.some((produto) => produto.name === name);
      
          if (!exists) {
            // Se não existir, adicione o novo produto ao array
            produtos.push(obj);
      
            // Salve o array atualizado no localStorage
            localStorage.setItem("produtos", JSON.stringify(produtos));
      
          } else {
            if(confirm("Deseja recadastrar o produto? ")){
                // se o nome do produto for igual e desejar recadastrar => recadastra
                console.log(produtos.find(item => item.name == name))
            }else{
                alert("Esse produto ja existe")
            }

            console.log("Já existe um produto com o mesmo nome:", name);
          }
        }
      
        // Limpe os campos de entrada
        setName("");
        setPreco(0);
        setqtd(0);
      };
      


    return (
        <ContainerCaixa>
            <ContentTitle>
                <Title>Caixa de produtos</Title>
                <ConfigButtonsContainer>
                    <ConfigButton onClick={()=>{
                        setShowModal(true)
                    }}><img src={ConfigImg} alt="" /></ConfigButton>
                    <ConfigButton onClick={()=>{
                        setShowFinancas(true)
                    }}>
                        <img src={CashIcon} alt="" />
                    </ConfigButton>
                </ConfigButtonsContainer>
            </ContentTitle>
            <Checkout />
            {showModal &&
                <ModalContainer>
                    <ModalContent>
                        <img onClick={()=>{
                            setShowModal(false)
                        }} src={CloseImg} alt="" />
                        <EditContainer>
                            <div>
                                <Title>Cadastrar Produtos</Title>
                                <EditProductsContainer>
                                    <LabelContainer>
                                        <label htmlFor="">Nome</label>
                                        <InputDefault value={name} onChange={
                                            (e)=>{setName(e.target.value)}
                                        } />
                                    </LabelContainer>
                                    <LabelContainer>
                                        <label htmlFor="">Preco</label>
                                        <InputDefault type="number" placeholder="R$ 00,00" value={preco} onChange={
                                            (e)=>{setPreco(parseFloat(e.target.value))}
                                        } />
                                    </LabelContainer>
                                    <LabelContainer>
                                        <label htmlFor="">Quantidade</label>
                                        <InputDefault type="number" value={qtd} onChange={
                                            (e)=>{setqtd(parseInt(e.target.value))}
                                        } />
                                    </LabelContainer>
                                    <LabelContainer>
                                        <BtnConfirm onClick={handleSaveProduct}>SALVAR</BtnConfirm>
                                    </LabelContainer>

                                </EditProductsContainer>
                            </div>
                            <div>
                                <Text>Produtos cadastrados</Text>
                                <ListContent>
                                    
                                    {productList.map(produto => (
                                        console.log("asdasd", (produto.preco).toFixed(2)),
                                        <ListItem key={produto.name}><p>{produto.name}</p><p><b>R$ {(produto.preco).toFixed(2)}</b> {(produto.qtd)}x</p></ListItem>
                                    ))}
                                    
                                </ListContent>
                            </div>
                        </EditContainer>
                    </ModalContent>
                </ModalContainer>
            }

            {
                showFinancas &&
                <ModalContainer>
                    <ModalContent>
                    <img onClick={()=>{
                        setShowFinancas(false)
                    }} src={CloseImg} alt="" />
                    <PayDoutContainer>
                            <Relatorio />
                        {/* <h3>Total vendido R$ {getVendas ? parseFloat(getVendas).toFixed(2) : (0).toFixed(2)}</h3>  */}
                    </PayDoutContainer>
                    </ModalContent>
                </ModalContainer>
            }
        </ContainerCaixa>
    )
}