import { Flex, Image } from '@chakra-ui/react'
import { PiEnvelopeSimpleOpenFill, PiFacebookLogoFill, PiTiktokLogoFill, PiInstagramLogoFill } from "react-icons/pi";
import BtnLink from '../btn/BtnLink';
import Logo from '../../assets/img/logo.png'
const Contact = () => {
    return (
        <>
            <Flex flexDirection={'column'}>
                <Flex flexDirection={'column'}paddingY={4}>
                    <Image
                        src={Logo}
                        loading='lazy'
                    />
                    <Flex flexWrap={'nowrap'} align={'center'} justify={'center'} gap={4}>
                        <BtnLink icon={<PiEnvelopeSimpleOpenFill />} link={'#'} />
                        <BtnLink icon={<PiFacebookLogoFill />} link={'#'} />
                        <BtnLink icon={<PiTiktokLogoFill />} link={'#'} />
                        <BtnLink icon={<PiInstagramLogoFill />} link={'#'} />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Contact