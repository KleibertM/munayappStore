import {
    Flex, Box, Image, Text, Button, Select, useToast
} from '@chakra-ui/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCart } from '../../hook/cartHook';
import { useState } from 'react';

const CardComponent = ({ dataItem }) => {
    const { id, nombre, descripcion, image, precio, ingredientes, estado } = dataItem
    const toast = useToast()
    const [quantity, setQuantity] = useState(12);
    const { addToCart } = useCart()

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
            <Flex flexDirection={'column'} gap={2}
                borderRadius={10} key={id} position={'relative'}
                w={'max-content'}
                >
                <Box
                    h={['auto', '350px']}
                    w={['auto', '250px']}
                    position={'relative'}
                    borderRadius={10}
                    overflow={'hidden'}
                >
                    <Slider {...settings}>
                        {image.map((img, index) => (
                            <Image
                                key={index}
                                src={img}
                                name={nombre}
                                h={'350px'}
                                w={'auto'}
                                borderRadius={10}
                                overflow={'hidden'}
                                loading='lazy'
                            />
                        ))}
                    </Slider>
                    <Flex justify={'space-between'}
                        align={'center'}
                        position={'absolute'}
                        bottom={0}
                        left={0}
                        paddingX={2}
                        w={'100%'}
                        color={'white'}
                        h={'50px'}
                        backdropFilter='auto' backdropBlur='12px'
                    >
                        <Text textOverflow={'ellipsis'}
                            whiteSpace={'nowrap'}
                            fontWeight={'bold'}
                            textShadow={'0 5px 10px #000'}
                        >
                            {nombre}
                        </Text>

                        <Text bg={'#58D68D'}
                            borderRadius={20}
                            paddingX={2}
                            fontWeight={'bold'}
                            textOverflow={'ellipsis'}
                            whiteSpace={'nowrap'}
                            h={['25px', 'auto']}
                            justifyItems={'center'}
                            textAlign={'center'}>
                            s/ {precio}
                        </Text>

                    </Flex>
                </Box>
                <Flex gap={2} justify={'space-around'}>
                    <Select
                        w={['5rem', 'auto']}
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))} // Actualizar la cantidad seleccionada 
                    >
                        {[...Array(200).keys()].map((number) => (
                            <option
                                key={number + 1}
                                value={number + 1}
                            >
                                {number + 1}
                            </option>
                        ))}
                    </Select>
                    <Button bg={'#2E4053'} color={'white'}
                        onClick={() => {
                            const productWithQuantity = { ...dataItem, quantity }; // Agregar la cantidad seleccionada al producto
                            addToCart(productWithQuantity); // Llamar a addToCart con el producto actualizado
                            toast({
                                title: 'Agregaste al Carrito.',
                                description: "Se agrego al carrito.",
                                status: 'success',
                                duration: 1000,
                                isClosable: true,
                            });
                        }}>
                        Comprar
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}

export default CardComponent