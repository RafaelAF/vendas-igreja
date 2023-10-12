import { useEffect, useState } from "react"
import { Title, Text } from "../styles"
import { FinancasContainer, InfosContainer,TableContainer, TotalValueContainer } from "./styles"
import { Venda } from "../../../types/produto"




export const Relatorio = () => {

    const [vendasDoBanco, setVendasDoBanco] = useState<Venda[]>([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        const vendasLocal = localStorage.getItem("vendas")
        const totalVendido = localStorage.getItem("Total-vendido")
        if(vendasLocal){
            setVendasDoBanco(JSON.parse(vendasLocal))
        }
        setTotal(totalVendido ? parseFloat(totalVendido) : 0)
    }, [])


    return (
        <FinancasContainer>
            <InfosContainer>
                <Title>Vendas Registradas</Title>
                <TableContainer>
                    <table>
                        <tr>
                            <th>Data da venda</th>
                            <th>Produtos</th>
                            <th>Forma de pagamento</th>
                            <th>Valor pago</th>
                            <th>Troco</th>
                            <th>Total da venda</th>
                        </tr>
                        {
                            vendasDoBanco.map((venda, index)=> (
                                <tr key={index}>
                                    <td>
                                        {String(new Date(venda.id).getDate())}/
                                        {String(new Date(venda.id).getMonth() + 1)}/
                                        {String(new Date(venda.id).getFullYear())}{" - "}
                                        {String(new Date(venda.id).getHours())}:
                                        {String(new Date(venda.id).getMinutes())}
                                    </td>
                                    <td>{venda.produtos.map(item => (
                                        <span>{item.qtdEscolhida} {item.name} </span>
                                    ))}</td>
                                    <td>{venda.tipoPagamento}</td>
                                    <td>R$ {(venda.valorPago).toFixed(2)}</td>
                                    <td>R$ {(venda.valorTroco).toFixed(2)}</td>
                                    <td>R$ {(venda.valorPago - venda.valorTroco).toFixed(2)}</td>
                                </tr>
                            ))
                        }
                        
                        
                    </table> 
                </TableContainer>
            </InfosContainer>
            <TotalValueContainer>
                <Title>Total vendido</Title>
                <Text>R$ {total.toFixed(2)}</Text>
            </TotalValueContainer>

        </FinancasContainer>
    )
}