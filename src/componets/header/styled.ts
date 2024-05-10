import styled, { css } from "styled-components";

export const Poppis = css`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');

`;


export const Container = styled.div`
    font-family: 'Poppins', sans-serif;
    margin-top: 35px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const logo = styled.img`
    width: 25%;
    border-radius: 50%;
    margin-top: 20px;
`;


export const namLoja = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`;
export const nikName = styled.span`
    text-transform:uppercase;
    color: #E0E0E0;
    font-size: 1rem;
    font-weight: bold;
`;
export const vericado = styled.img`
    width: 10%;
    margin-left: 5px;
`;

export const h4 = styled.h4`
    color: #CCC;
    font-size: .9rem;
    margin: 5px 0;
    font-weight: normal;
`
export const descricao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #37474F;
    cursor: pointer;
    margin: 5px 0;
    `;

export const inco = styled.i`
    font-size:1.3rem;
    
`;

export const span = styled.a`
    text-decoration: none;
    color: #37474F;
    font-size: .9rem;
    font-weight: bold;
`;