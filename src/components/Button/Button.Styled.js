import styled from "styled-components";

export const BtnLoadMore = styled.button`

    margin: 0 auto;
    width: 150px;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.border};
    cursor: pointer;
   
    height: 40px;
    text-align:center;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background-size: 300% 100%;
    background: transparent;
    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

&:hover{
    color: ${({ theme }) => theme.colors.backgraund};
    border: none;
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out; 
    box-shadow: inset 0 -3.25em 0 0 ${({ theme }) => theme.colors.border};
}
&:focus {
    outline: none;
}
`;





  