import * as C from './styled';
import logoImg from '../../imgs/WhatsApp Image 2023-06-03 at 07.54.14.jpeg';
import verificado from '../../imgs/simbolo-verificado.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



export const ContHeader = () =>{


    return(
        <C.Container>    
            <C.Header>
                <C.logo src={logoImg} />
                <C.namLoja>
                    <C.nikName>pico das prata 925</C.nikName>
                    <C.vericado src={verificado}/>
                </C.namLoja>
                <C.h4>Somos o maior vendedor de prata do Brasil!</C.h4>
                <C.descricao>
                    <C.inco><FontAwesomeIcon icon={faEnvelope} /></C.inco>
                    <C.span href='picodaspratas000@gmail.com'>Email</C.span>
                </C.descricao>
            </C.Header>
        </C.Container>
    )
}