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

export const InputPagamento = styled.input`
    margin: 30px 0;
    padding: 8px 18px;
    border: none;
    outline: 0;
    border: 1px solid #aaa;
    border-radius: 8px;
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
`;

export const ContainerCalculate = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    max-height: calc(100% - 100px);
    height: 100%;
`;