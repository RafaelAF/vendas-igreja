import { Checkout } from "./Checkout"
import { 
    ContainerCaixa, 
    Title, 
    ContentTitle, 
    ConfigButton, 
    ModalContainer, 
    ModalContent,
    EditContainer,
    EditProductsContainer, Text, LabelContainer} from "./styles"

import ConfigImg from '../../assets/Vector.svg'
import CloseImg from '../../assets/X.svg'
import { useEffect, useState } from "react"
import { BtnConfirm, InputPagamento, ListContent, ListItem } from "./Checkout/styles"



import { Produto } from "../../types/produto"

export const Container = () => {


    const [showModal, setShowModal] = useState(false)

    const [name, setName] = useState('')
    const [preco, setPreco] = useState<number>(0)
    const [qtd, setqtd] = useState<number>(0)

    const [productList, setProductList] = useState<Produto[]>([])


    useEffect(()=>{
        let produtosData = localStorage.getItem("produtos")
        if(produtosData){

            setProductList(JSON.parse(produtosData))
            // console.log(JSON.parse(produtos))
        }
        // console.log("Produtos ", produtos)
        // console.log("Produtos parseados", JSON.parse(produtos))
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
      
            console.log("Produto adicionado:", obj);
          } else {
            if(confirm("Deseja recadastrar o produto? ")){
                // se o nome do produto for igual e desejar recadastrar => recadastra
                console.log(produtos.find(item => item.name == name))
            }else{
                console.log("Esse produto ja existe")
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
                <ConfigButton onClick={()=>{
                    setShowModal(true)
                }}><img src={ConfigImg} alt="" /></ConfigButton>
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
                                <Title>Editar Produtos</Title>
                                <EditProductsContainer>
                                    <LabelContainer>
                                        <label htmlFor="">Nome</label>
                                        <InputPagamento value={name} onChange={
                                            (e)=>{setName(e.target.value)}
                                        } />
                                    </LabelContainer>
                                    <LabelContainer>
                                        <label htmlFor="">Preco</label>
                                        <InputPagamento type="number" placeholder="R$ 00,00" value={preco} onChange={
                                            (e)=>{setPreco(parseFloat(e.target.value))}
                                        } />
                                    </LabelContainer>
                                    <LabelContainer>
                                        <label htmlFor="">Quantidade</label>
                                        <InputPagamento type="number" value={qtd} onChange={
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
        </ContainerCaixa>
    )
}