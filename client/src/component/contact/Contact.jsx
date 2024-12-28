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
                        <BtnLink icon={<PiEnvelopeSimpleOpenFill />} link={'mailto:munay.mar.art@gmail.com'} />
                        <BtnLink icon={<FaFacebook />}  link={'https://www.facebook.com/profile.php?id=61565800532670'} />
                        <BtnLink icon={<PiTiktokLogoFill />} link={'https://www.tiktok.com/@munay.marcianos.a?is_from_webapp=1&sender_device=pc'} />
                        <BtnLink icon={<PiInstagramLogoFill />} link={'https://www.instagram.com/munay_marcianos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='} />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Contact