
import { useCart } from '../../hook/cartHook'
import CartNull from './cartNull'
import { BsTrash, BsXCircle, BsWhatsapp } from "react-icons/bs";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Avatar,
    TableContainer,
    Flex,
    Button,
    Heading,
    Box,
    Text,
} from "@chakra-ui/react";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";
import Swal from 'sweetalert2'
import { useEffect } from 'react';

const Cart = () => {
    const { cart, total, cartRemove, cleanCart, decrementQuantity,
        incrementQuantity, setTotal, setCart } = useCart()


    useEffect(() => {

        const totalStorage = localStorage.getItem('total');
        if (totalStorage) {
            const parseTotal = JSON.parse(totalStorage)
            const updateTotal = () => {
                setTotal(parseTotal)
            }
            updateTotal()
        }

        const cartStorage = localStorage.getItem('cart');
        if (cartStorage) {
            const parseCart = JSON.parse(cartStorage)
            const updateCart = () => {
                setCart(parseCart)
            }
            updateCart()
        }
    }, []);

    const totalAcortado = total.toFixed(2);

    const SendWhatsAppMessage = async (cart) => {
        const message = `¡Hola! Me gustaría comprar los siguientes Marcianos:\n\n${cart
            .map((book) => `Marcianos: ${book.nombre} - S/${book.precio} Cant: ${book.quantity} 
                `)
            .join("\n")}\n\n Total: ${total} soles\n ¿Podrías ayudarme con la compra?`;

        const formattedMessage = encodeURIComponent(message);
        const whatsappURL = `https://api.whatsapp.com/send?phone=51976963819&text=${formattedMessage}`;

        window.open(whatsappURL, "_blank");
    };

    const deleteAllCart = () => {
        Swal.fire({
            title: "¿Quieres vaciar el carrito?",
            text: "¡Se eliminaran todos los articulos!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#2ECC71",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                cleanCart()
                Swal.fire({
                    title: "Eliminado!",
                    text: "Articulos eliminados.",
                    icon: "success"
                });
            }
        });

    }

    const deleteItemCart = (book) => {
        Swal.fire({
            title: "¿Eliminar articulo?",
            text: "¡No podras revertir esta acción!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#2ECC71",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
        }).then((result) => {
            if (result.isConfirmed) {
                cartRemove(book)
                Swal.fire({
                    title: "ELimiado!",
                    text: "Articulos eliminado del carrito.",
                    icon: "success"
                });
            }
        });
    }

    const cleanArr = (arr) => {
        return arr.map((book) => {
            return {
                id: book.id,
                quantity: book.quantity,
                price: book.precio,
            }
        });
    }
    return (
        <>
            <Flex flexDirection={"column"} w={'100%'} justify={'center'} align={'center'}>
                {cart.length ? (
                    <>
                        <Heading fontSize={"1.3rem"} marginLeft={'1rem'}>Nave de Compras</Heading>
                        <Flex>
                            <TableContainer>
                                <Table size={["sm", 'lg']}>
                                    <Thead>
                                        <Tr>
                                            <Th>Cant</Th>
                                            <Th>Producto</Th>
                                            <Th>Precio</Th>
                                            <Th>accion</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody >
                                        <>
                                            {cart?.map((book) => (
                                                <Tr key={book.id}>
                                                    <Td w={["4rem", "10rem"]}>
                                                        <NumberInput
                                                            value={book.quantity}
                                                            min={1}
                                                            w={["4.2rem", "10rem"]}
                                                            h={["max-content", "auto"]}
                                                        >
                                                            <NumberInputField />
                                                            <NumberInputStepper>
                                                                <NumberIncrementStepper
                                                                    onClick={() => incrementQuantity(book)}
                                                                />
                                                                <NumberDecrementStepper
                                                                    onClick={() => decrementQuantity(book)}
                                                                />
                                                            </NumberInputStepper>
                                                        </NumberInput>
                                                    </Td>
                                                    <Td w={["6.3rem", "16rem"]} overflow={"hidden"}>
                                                        <Flex
                                                            align={"center"}
                                                            gap={["1", '4']}
                                                            w={["6.3rem", "8rem"]}
                                                            textOverflow={"ellipsis"}
                                                            whiteSpace={"pre-wrap"}
                                                        >
                                                            <Avatar
                                                                src={book.image && book.image[0]}
                                                                h={"2rem"}
                                                                w="2rem"
                                                                objectFit={"cover"}
                                                            />
                                                            <Text fontWeight="bold" fontSize={"1.2rem"}>
                                                                {book.nombre}
                                                            </Text>
                                                        </Flex>
                                                    </Td>
                                                    <Td  w={["auto", "10rem"]}> S/{book.precio} </Td>
                                                    <Td>
                                                        <Button
                                                            bg='none'
                                                            onClick={() => deleteItemCart(book)}

                                                            color={'red'}
                                                            borderRadius={50}
                                                            h='3rem' w='3rem'
                                                        >
                                                            <Text fontSize={'2rem'}
                                                            >
                                                                <BsXCircle />
                                                            </Text>
                                                        </Button>
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </>
                                        <Tr w="100%">
                                            <Td>
                                                <Button onClick={deleteAllCart}
                                                    borderRadius={50}
                                                    h='3rem' w='3rem'
                                                    colorScheme="red" >
                                                    <Text fontSize={'2rem'}>
                                                        <BsTrash />
                                                    </Text>
                                                </Button>
                                            </Td>
                                            <Td>

                                                <Text fontWeight={'bold'} >Total</Text>
                                            </Td>
                                            <Td>
                                                <Text color={'green'} fontWeight={'semibold'}  >  {totalAcortado} </Text>
                                            </Td>
                                            <Td>
                                                soles
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                    <Tfoot>
                                        <Tr>
                                            <Th>#</Th>
                                            <Th>Producto</Th>
                                            <Th>Precio</Th>
                                            <Th>accion</Th>
                                        </Tr>
                                    </Tfoot>
                                </Table>
                            </TableContainer>


                        </Flex>
                        <Flex w="100%" justify={"space-evenly"} p="1.5rem" align={'center'} flexDirection={'column'} gap={2} >
                            <Button
                                onClick={() => SendWhatsAppMessage(cart)}
                                colorScheme="green"
                                gap={2}
                                w={['220px', '220px']}
                            >
                                Concretar Pedido en
                                <Text fontSize={'1.3rem'}>
                                    <BsWhatsapp />
                                </Text>
                            </Button>
                        </Flex>
                    </>
                ) : <>
                    <Flex w={'100%'} justify={'center'} align={'center'} py={4}>
                        <CartNull />
                    </Flex>
                </>}
            </Flex>
        </>
    )
}

export default Cart