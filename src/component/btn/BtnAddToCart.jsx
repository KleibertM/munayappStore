import { useState } from "react";
import { useCart } from "../../hook/cartHook";
import { Button, useToast, Select, Flex, Text, Tooltip } from '@chakra-ui/react'
import { PiFlyingSaucerBold } from "react-icons/pi";

const BtnAddToCart = ({ dataItem }) => {
    const { addToCart } = useCart()
    const toast = useToast()

    const [quantity, setQuantity] = useState(12);
    return (
        <>
            <Flex gap={2}>
                <Select
                    name="elegir cantidad"
                    border={"none"}
                    w={['5rem', 'auto']}
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))} // Actualizar la cantidad seleccionada 
                >
                    {[...Array(189).keys()].map((number) => (
                        <option
                            key={number + 12}
                            value={number + 12}
                        >
                            {number + 12}
                        </option>
                    ))}
                </Select>
                <Tooltip label='Agregar a la Nave'>
                    <Button bg={'#2E4053'} color={'white'} name="Agregar a la Nave"
                        onClick={() => {
                            const productWithQuantity = { ...dataItem, quantity }; // Agregar la cantidad seleccionada al producto
                            addToCart(productWithQuantity); // Llamar a addToCart con el producto actualizado
                            toast({
                                title: 'Agregaste a la Nave.',
                                description: `Se agrego ${quantity} marcianos de ${dataItem.nombre} a la Nave.`,
                                status: 'success',
                                duration: 1000,
                                isClosable: true,
                            });
                        }}
                        borderRadius={50}>
                        <Text fontSize={'2rem'}>
                            <PiFlyingSaucerBold />
                        </Text>
                    </Button>
                </Tooltip>
            </Flex>
        </>
    )
}
export default BtnAddToCart