import { Flex, Image } from '@chakra-ui/react'
import { PiEnvelopeSimpleOpenFill, PiFacebookLogoFill, PiTiktokLogoFill, PiInstagramLogoFill } from "react-icons/pi";
import BtnLink from '../btn/BtnLink';

const Contact = () => {
    return (
        <>
            <Flex flexDirection={'column'}>
                <Flex flexDirection={'column'}paddingY={4}>
                    <Image
                        src='https://res.cloudinary.com/dzd6hfguw/image/upload/v1709341195/samples/Munay_oshrbl.jpg'
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