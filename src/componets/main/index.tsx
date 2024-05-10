import { useEffect, useState } from 'react';
import * as C from './styled';
import { FaFacebook, FaGlobe, FaTrophy, FaWhatsapp } from "react-icons/fa";



export const ContMain = () => {

    useEffect(() => {

    }, [])


    //alerta
    const [isAlerta, setAlerta] = useState(false)
    const [isSitMensage, setSitMensa] = useState('')

    //Facebook
    const facebook = () => {
        let link = "https://www.facebook.com/profile.php?id=100082538607318";
        window.open(link, '_blank')
    }

    const Contato1 = () => {
        let link = 'https://api.whatsapp.com/send?phone=5511953389909&text=Oi,Pico%20das%20prata'
        window.open(link, '_blank')
    }


    //Alertas

    const timerOutFunti = () => {

        if (!isSitMensage) {

            const TimeOut = setTimeout(() => {
                setAlerta(false)
                clearTimeout(TimeOut)
            }, 2000)

        }
    }


    const handlAlerta = () => {
        // const novoTamanho = (tamanho === '38px') ? '0px' : '38px'
        // setTamanho(novoTamanho)


        setAlerta(true)
        setSitMensa('Catalogo indisponiveis no Momento 🙁')

        timerOutFunti()


    }
    const handlAlerta2 = () => {
        setAlerta(true)
        setSitMensa('Rifas indisponiveis no Momento 🙁')
        setTimeout(() => {
            setAlerta(false)
        }, 2000)


    }




    return (
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
                <>
                    <C.BtnCont onClick={facebook}>
                        <C.incon><FaFacebook /></C.incon>
                        <C.textBtn>Facebook</C.textBtn>
                    </C.BtnCont>
                    <C.BtnCont onClick={Contato1}>
                        <C.incon>
                            <FaWhatsapp />
                        </C.incon>
                        <C.textBtn>Whatsapp</C.textBtn>
                    </C.BtnCont>
                    <C.BtnCont onClick={handlAlerta}>
                        <C.incon>
                            <FaGlobe />
                        </C.incon>
                        <C.textBtn>Catalogo</C.textBtn>
                    </C.BtnCont>
                    <C.BtnCont>
                        <C.incon>
                            <FaGlobe />
                        </C.incon>
                        <C.textBtn>Shopee</C.textBtn>
                    </C.BtnCont>
                    <C.BtnCont onClick={handlAlerta2}>
                        <C.incon>
                            <FaTrophy />
                        </C.incon>
                        <C.textBtn>Rifas</C.textBtn>
                    </C.BtnCont>
                </>
            </C.BtnPrincipal>

        </C.Container>
    )
}