import {styled, css} from "styled-components";


export const Poppis = css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap');
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-family: 'Poppins', sans-serif;
`;

export const BtnPrincipal = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: 'Poppins', sans-serif;
`;

export const BtnCont = styled.div`
    width: 100%;
    max-width: 28%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 0;
    border: 1px solid #CCC;
    border-radius: 15px;
    margin-bottom: 15px;
    cursor: pointer;

`;

export const incon = styled.i`
    margin: 0 15px;
    font-size: 1.4rem;
    color:#37474F ;
`;

export const textBtn = styled.h2`
    font-size: 1.1rem;
    color: #BDBDBD;
    font-weight: bold;
    flex: 1;
    margin: 0 2px;
    
`;

export const ContatoWhat = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    font-family: 'Poppins', sans-serif;
`;


export const alerta = styled.div`
    width: 100%;
    height: 38px;
    max-width: 250px;
    background-color: rgba(255,255,255,.2);
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    text-align: center;
    position: absolute;
    margin-top: 5px;
    top: 0;
    border-radius: 5px;
    border-bottom-left-radius: 0px;
    transition: .2s all ease-in-out ;
`

export const alertText = styled.p`
    color: #CCC;
    font-size: .8rem;
    background-color:transparent;
    margin: 5px 5px 0px 5px;
`

export const loading = styled.div`
    position: relative;
    width:100%;
    max-width: 250px;
    height: 2px;
    background-color: #3949AB;
    border-bottom-left-radius:15px;
    border-bottom-right-radius: 15px;
    animation: alerta 2.1s ease-in ;


    @keyframes alerta {
        0%{
            width: 250px;
        }
        100%{
            width:0px;
        }
    }
`
// rgba(255,255,255,.1)