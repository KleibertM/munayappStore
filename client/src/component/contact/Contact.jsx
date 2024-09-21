import { Flex, Image } from '@chakra-ui/react'
import { PiEnvelopeSimpleOpenFill, PiTiktokLogoFill, PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import BtnLink from '../btn/BtnLink';
import Logo from '../../assets/img/logo.png'
const Contact = () => {
    return (
        <>
            <Flex flexDirection={'column'} justifyContent={'center'} align={'center'}>
                <Flex flexDirection={['column', 'row']} paddingY={4} gap={10}>
                    <Image
                        src={Logo}
                        loading='lazy'
                        alt='Logo Munay'
                        h={['auto', '12rem']}
                    />
                    <Flex flexWrap={'nowrap'} align={'center'} justify={'center'} gap={4}>
                        <BtnLink icon={<PiEnvelopeSimpleOpenFill />} link={'#'} />
                        <BtnLink icon={<FaFacebook />} link={'#'} />
                        <BtnLink icon={<PiTiktokLogoFill />} link={'#'} />
                        <BtnLink icon={<PiInstagramLogoFill />} link={'#'} />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Contact