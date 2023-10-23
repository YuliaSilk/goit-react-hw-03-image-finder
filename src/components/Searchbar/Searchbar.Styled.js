import styled from "styled-components";
import { ErrorMessage, Form, Field } from "formik";

export const SearchBarStyle = styled.div`
display: flex;
position: relative;
top: 0;  
left: 0;
position: sticky;
z-index: 1100;
justify-content: center;
align-items: center;
width: 100%;
min-height: 64px;
padding: ${p => p.theme.spacing(4)} ${p => p.theme.spacing(6)};;
color: ${({ theme }) => theme.colors.header};
background-color: ${({ theme }) => theme.colors.backgraund};
box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`;


export const SearchForm = styled(Form)`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 60%;
  background-color:${({ theme }) => theme.colors.backgraund};
`;


export const SearchInput = styled(Field)`
display: inline-block;
width: 400px;
height: 32px;
margin-left: 8px;
font: inherit;
font-size: 20px;
border: none;
outline: none;
padding: ${p => p.theme.spacing(3)};
color:${({ theme }) => theme.colors.inputColor};
border-radius: 15px;

&:hover {
    border: 2px solid ${({ theme }) => theme.colors.border};
    /* box-shadow: 2px -2px 9px 1px rgba(241, 241, 241, 0.9); */
    }

    &::placeholder {
font: inherit;
font-size: 18px;
color:${({ theme }) => theme.colors.border};
    }
`
export const SearchFormBtn = styled.button`
 color:${({ theme }) => theme.colors.main};
 display: inline-block;
 position: absolute;
 top: 10%;
 right: 10px;
 width: 32px;
 height: 32px;
 border: none;
 outline: none;
 border-radius: 15px;
 background-color: transparent;
 cursor: pointer;
 transition:  250ms cubic-bezier(0.4, 0, 0.2, 1);
 
 &:hover {
    color:${({ theme }) => theme.colors.backgraund};}
    `;

export const ErrMsg = styled(ErrorMessage)`
color: ${({ theme }) => theme.colors.error};
font-size: 16px;
margin-top: 4px;
margin-bottom: 8px;
width: auto;
padding-left: 16px;
`;
