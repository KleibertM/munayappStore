import {
    Flex, Box, Image, Text, Button, Select, useToast
} from '@chakra-ui/react'
import { useCart } from '../../hook/cartHook';
import { useState } from 'react';
import ImageRender from './ImageRender';

const CardComponent = ({ dataItem }) => {
    const { id, nombre, descripcion, image, precio, ingredientes, estado } = dataItem
    const toast = useToast()
    const [quantity, setQuantity] = useState(12);
    const { addToCart } = useCart()

    return (
        <>
            <Flex flexDirection={'column'} gap={2}
                borderRadius={10} key={id} position={'relative'}
                w={'max-content'}
                >
                <Box
                    h={['auto', '350px']}
                    w={['10rem', '250px']}
                    position={'relative'}
                    borderRadius={10}
                    overflow={'hidden'}
                >
                    < ImageRender image={image} name={nombre} wImg={'auto'} hImg={'330px'} />
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
                        gap={2}
                    >
                        <Text textOverflow={'ellipsis'}
                            whiteSpace={'nowrap'}
                            fontWeight={'bold'}
                            textShadow={'0 5px 10px #000'}
                            maxWidth={'2rem'}
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
                <Flex gap={2} justify={'space-around'} w={['10rem', '250px']}>
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