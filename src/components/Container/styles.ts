import styled from "styled-components";

export const ContainerCaixa = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #D9D9D9;
    padding: 20px;
`;

export const ContentTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 18px;
`;

export const Title = styled.h1`
    color: #000;
    font-family: 'Inter', 'sans-serif';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;


export const Text = styled.p`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;


export const ConfigButton = styled.button`
    background-color: rebeccapurple;
    padding: 8px 40px;
    border: none;
    outline: 0;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 80%;
    border-radius: 8px;
    max-height: 700px;
    background-color: #fff;
    padding: 28px;
    display: flex;
    flex-direction: column;
    align-items: end;

    img{
        width: 38px;
        height: 38px;
        cursor: pointer;
    }
`;
export const ModalPagamentoContent = styled(ModalContent)`
    max-width: 700px;
    max-height: 500px;
`;


export const EditContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* background-color: #ddd; */
    gap: 20px;
    &  > div{
        background-color: #F2E8FF;
        padding: 20px;
    }
`;


export const EditProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    
`;

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: end;
    /* align-items: end; */
    /* background-color: red; */
    input{
        margin: 10px 0 0;
    }
    &:nth-child(4){
        align-items: end;
    }
    button{
        max-width: 120px;
    }
`;