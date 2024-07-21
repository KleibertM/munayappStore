import { Image, Flex, Box } from '@chakra-ui/react'
import { banners } from '../Data/data';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrusel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <Flex position={'relative'} justifyContent="center"
                alignItems="center"
                flexDirection={{ base: "column", md: "row" }} 
                h={'auto'}>
                <Box
                    width={{ base: "100%", md: "100%" }}
                    position="relative"
                    overflow="hidden" >
                    <Slider {...settings} >
                        {banners.map((img, index) => (
                            <Box key={index} overflow="hidden" justifyContent={'center'} alignContent={'center'} >
                                <Image
                                    src={img.image}
                                    alt={img.name}
                                    objectFit={'cover'}
                                    h={{base: '230px', md: '350px'}}
                                    w={{base: 'auto', md: '100%'}}
                                    loading='lazy'
                                />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Flex>
        </>
    )
}

export default Carrusel