import styled from "styled-components";

export const FinancasContainer = styled.div`
    width: 100%;
    height: 100%;
    /* max-height: calc(100% - 80px); */
    border-radius: 8px;
    background: #F2E8FF; 
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const InfosContainer = styled.div`
    flex: 1;
`;
export const TotalValueContainer = styled.div`
    height: 40px;
    display: flex;
    justify-content: space-between;
`;

export const TableContainer = styled.div`
    width: 100%;
    height: calc(100% - 70px);
    overflow-y: auto;
    /* background-color: #ddd; */
    table{
        background-color: #ddd;
        border: 1px solid #000;
        border-radius: 8px;
        width: 100%;
        border-collapse: collapse;
        th{
            text-align: start;
            border: 1px solid #000;
            padding: 0 5px;
            
        }
        tr{
            text-align: start;
            
            &:nth-child(odd){
                background-color: #d9d9d9;
            }
            &:nth-child(even){
                background-color: #fff;
            }
            
        }
        td{
            border: 1px solid #000;
            padding: 5px;
            &:nth-child(1){
                width: 200px;
            }
            &:nth-child(2){
                /* background-color: red; */
                /* display: flex; */
                /* background-color: red; */
                text-size-adjust: unset;
                -webkit-line-clamp: 1;
            }
            &:nth-child(3){
                width: 210px;
            }
            &:nth-child(4){
                width: 120px;
            }
            &:nth-child(5){
                width: 100px;
            }
        }
    }
`;
