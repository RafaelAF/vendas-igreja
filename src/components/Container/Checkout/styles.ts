import styled from "styled-components";

export const CheckoutContainer = styled.div`
    width: 100%;
    height: calc(100% - 50px);
    background-color: #fff;
    padding: 18px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    @media (max-width: 1080px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ListProducts = styled.div`
    background-color: rgba(117, 90, 203, 0.20);
    padding:  15px 22px;
    position: relative;
    border: 1px solid rgba(0, 0, 0, 0.10);
    

`;

export const ListSelected = styled.div`
    background-color: rgba(217, 217, 217, 0.20);
    padding: 15px 22px;
    position: relative;
    
`;

export const ListContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 40px;
    max-height: calc(100vh - 280px);
    overflow: auto;
`;

export const ListItem = styled.div`
    background-color: rgba(117, 90, 203, 0.05);
    padding: 20px 6px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SubtotalContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    margin-top: 1px solid #000;
    width: 100%;
    padding: 19px;
`;

export const SubtotalContainer1 = styled(SubtotalContainer)`
    background-color: rgba(117, 90, 203, 0.20);;
`;


export const SubtotalContainer2 = styled(SubtotalContainer)`
    display: flex;
    background-color: #ddd;
    justify-content: space-between;
    align-items: center;
`;



export const InputDefault = styled.input`
    margin: 30px 0;
    padding: 8px 18px;
    border: none;
    outline: 0;
    border: 1px solid #aaa;
    border-radius: 8px;
`;
export const InputPagamento = styled(InputDefault)`
    margin: 10px 0;
`;

export const DotsContainer = styled.div`
    border-top: 1px solid #000;
`;

export const BtnConfirm = styled.button`
    border-radius: 4px;
    border: none;
    background: #18BA53; 
    padding: 10px;
    cursor: pointer;
    color: #fff;
`;

export const ControlerProduct = styled.span`
display: flex;
align-items: center;

    span:nth-child(2){
        margin-left: 20px;
        display: flex;
        span{
            margin: 0 5px;
            font-size: 18px;
        }
    }
`;


export const ProductsSelecteds = styled.div`
    max-height: 340px;
    /* padding-bottom: 10px; */
    overflow: auto;
    display: flex;
    flex-direction: column;
    & > div{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const ContainerCalculate = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    max-height: calc(100% - 100px);
    height: 100%;
`;


export const PagamentoContainer = styled.div`
    /* background-color: #ddd; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

export const PaymentMethodsContainer = styled.div`
    margin-top: 15px;
    display: flex;
    gap: 12px;
`;

export const PaymentMethod = styled.button`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    padding: 8px 16px; 
    text-align: center;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: rgba(217, 217, 217, 0.20);
    transition: 300ms all;
    cursor: pointer;
    &:hover{
        border: 1px solid #8F64D4;
        background: #EBDBFF;
        transition: 200ms all;
    }
`;

export const SelectedMethod = styled(PaymentMethod)`
    border: 1px solid #8F64D4;
    background: #EBDBFF;
    transition: 200ms all;
`;

export const LoadingContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 200px;
        height: 200px;
        animation: spinner 2s linear infinite;
    }

    @keyframes spinner {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`;

export const FinishedContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 200px;
        height: 200px;
    }
`;

export const PayDoutContainer = styled.div`
    width: 100%;
    height: 100%;
`;


export const FishedPaymentTitle = styled.h1`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 64px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 20px;
`;