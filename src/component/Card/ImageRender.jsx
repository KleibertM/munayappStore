import { Image, } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageRender = ({ image, name, wImg, hImg }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };
    return (
        <>
            <Slider {...settings}>
                {image.map((img, index) => (
                    <Image
                        key={index}
                        src={img}
                        name={name}
                        h={hImg}
                        w={wImg}
                        borderRadius={10}
                        overflow={'hidden'}
                        loading='lazy'
                    />
                ))}
            </Slider>
        </>
    )
}
export default ImageRender