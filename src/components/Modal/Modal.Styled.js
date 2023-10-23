import styled from "styled-components";


export const BtnCloseModal = styled.button`
 color:${({ theme }) => theme.colors.main};
 display: inline-block;
 position: absolute;
 top: 3%;
 right: 3%;
 width: 48px;
 height: 48px;
 border: none;
 outline: none;
 border-radius: 15px;
 background-color: transparent;
 cursor: pointer;
 transition:  250ms cubic-bezier(0.4, 0, 0.2, 1);
 
 &:hover {
    color:${({ theme }) => theme.colors.backgraund};}
`;

