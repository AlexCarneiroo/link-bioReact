import { useEffect, useState } from 'react';
import * as C from './styled';
import {  FaComment, FaCommentAlt, FaComments, FaFacebook , FaGlobe, FaRegComment, FaRegComments, FaTrophy, FaWhatsapp } from "react-icons/fa";



export const ContMain = ()=>{
    
    useEffect(()=>{

    },[])
    
    
    //state-Whatzpp
    const [isWhats,setWhats] = useState(true)
    const [isConta,setConta] = useState(false)
    
    //alerta
    const [tamanho,setTamanho] = useState('38px')
    const [isAlerta,setAlerta] = useState(false)
    const [isSitMensage,setSitMensa] = useState('')

//Facebook
    const facebook = ()=>{
        let link = "https://www.facebook.com/profile.php?id=100082538607318";
        window.open(link, '_blank')
    }
    
//WhatsZapp
    const whats = () =>{
        if(isWhats){
            setWhats(false)
            setConta(true)
        }

        
    }
    const Contato1 = ()=>{
        let link = 'https://contate.me/picodasprata925'
        window.open(link , '_blank')
    }
    const Contato2 = ()=>{
        let link = 'https://api.whatsapp.com/send?phone=5511967641207&text=Ol%C3%A1%20,%20Pico%20das%20prata'
        window.open(link , '_blank')
    }

//Alertas

    const timerOutFunti = ()=>{

        if(!isSitMensage){

            const TimeOut = setTimeout(()=>{
                setAlerta(false)
                clearTimeout(TimeOut)
            },2000)

        }      
    }


    const handlAlerta = ()=>{
        // const novoTamanho = (tamanho === '38px') ? '0px' : '38px'
        // setTamanho(novoTamanho)

        
        setAlerta(true)
        setSitMensa('Site indisponiveis no Momento 🙁')

        timerOutFunti()

        
    }
    const handlAlerta2 = ()=>{
        setAlerta(true)
            setSitMensa('Rifas indisponiveis no Momento 🙁')
        const timeOut = setTimeout(()=>{
            setAlerta(false)            
        },2000)

    
    }



    
    return(
        <C.Container>
            {isAlerta && (
                <>
                    <C.alerta>
                        <C.alertText>{isSitMensage}</C.alertText>
                        <C.loading></C.loading>
                    </C.alerta>            
                </>

            )}


            <C.BtnPrincipal>
                {isWhats && (
                    <>
                        <C.BtnCont onClick={facebook}>
                            <C.incon><FaFacebook/></C.incon>
                            <C.textBtn>Facebook</C.textBtn>
                        </C.BtnCont>
                        <C.BtnCont onClick={whats}>
                            <C.incon>
                                <FaWhatsapp/>
                            </C.incon>
                            <C.textBtn>Whatsapp</C.textBtn>
                        </C.BtnCont>
                        <C.BtnCont onClick={handlAlerta}>
                            <C.incon>
                                <FaGlobe/>
                            </C.incon>
                            <C.textBtn>Nosso Site</C.textBtn> 
                        </C.BtnCont>
                        <C.BtnCont onClick={handlAlerta2}>
                            <C.incon>
                                <FaTrophy/>
                            </C.incon>
                            <C.textBtn>Rifas</C.textBtn>
                        </C.BtnCont>                
                    </> 
                )}     
            </C.BtnPrincipal>
                
            <C.ContatoWhat>
                {isConta && (
                    <>
                        <C.BtnCont onClick={Contato1}>
                            <C.incon>
                                <FaComment/>
                            </C.incon>
                            <C.textBtn>Contato 1</C.textBtn>
                        </C.BtnCont>
                        <C.BtnCont onClick={Contato2}>
                            <C.incon>
                                <FaRegComment/>
                            </C.incon>
                            <C.textBtn>Contato 2</C.textBtn>
                        </C.BtnCont>
                    </>
                )}
            </C.ContatoWhat>
        </C.Container>
    )
}