import { Image, } from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './Image.module.css'


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
                    <div key={index} className={style.image_container}>
                        <Image
                            src={img}
                            name={name}
                            h={hImg}
                            w={wImg}
                            borderRadius={10}
                            overflow={'hidden'}
                            objectFit={'cover'}
                            loading='lazy'
                            alt={name}
                        />
                    </div>
                ))}
            </Slider>
        </>
    )
}
export default ImageRender