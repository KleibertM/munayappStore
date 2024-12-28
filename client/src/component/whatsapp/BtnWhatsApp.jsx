import {Flex, Text, Link} from '@chakra-ui/react'
import { PiWhatsappLogoLight } from "react-icons/pi";
const BtnWhatsapp = () => {
    const whatsappLink = "https://wa.me/51976963819";
    return (
        <>
        <Flex position={'fixed'} bottom={'2.5rem'} right={'1.5rem'} w="50px"
                h="50px" align={'center'} justify={'center'} borderRadius={50} bg='green' zIndex={99} 
                  _hover={{
                    boxShadow: "0px 0px 20px green",
                    transition: "box-shadow 0.3s ease-in-out"
                  }} >
            <Link href={whatsappLink} >
                <Text  w="100%" h="100%" fontSize={'2.5rem'} color={'white'}>
                    <PiWhatsappLogoLight /> 
                </Text>
            </Link>
        </Flex>
        </>
    )
}

export default BtnWhatsapp