
import { useParams } from "react-router-dom";
import { Box, Badge, Flex, Heading, Text, Container, Accordion, AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, } from '@chakra-ui/react'
import { BsCart4 } from "react-icons/bs";
import { dataMunay } from '../Data/data'
import ImageRender from "./ImageRender";
import BtnAddToCart from "../btn/BtnAddToCart";
// import { lazy, Suspense } from 'react';
import MoreItems from "./MoreItems";
import { useEffect } from "react";

// const ImageRender = lazy(()=> import('./ImageRender'))

const DetailCards = () => {
    const { id } = useParams()
    const filterData = dataMunay.filter((item) => item.id === id)
    let bgPrice = filterData[0].tipo ? '#58D68D' : '#9b59b6';
    useEffect(() => {
        // Esto asegura que el scroll se posicione en la parte superior cuando el componente se monte
        window.scrollTo(0, 0);
    }, [filterData]);
    return (
        <>
            {filterData.length ? (
                <>
                    <Box borderRadius='lg' overflow='hidden' w={'100%'} h={{ base: '95vh', md: 'auto' }} position={'relative'} bg='white' display={'flex'} flexDirection={['column', 'row']} gap={[0,20]}  justifyContent={'center'}>

                        <Box h={{ base: '450px', md: '550px' }} w={['100%', '550px']} overflow={'hidden'} px='8' position={'relative'}  >
                            <Flex w={'100%'} h={'100%'} flexDirection={'column'} position={'absolute'} top={0} left={0} >
                                <ImageRender
                                    hImg={['450px', '500px']}
                                    wImg={['450px', '550px']}
                                    image={filterData[0].image}
                                    name={filterData[0].nombre} />
                            </Flex>
                        </Box>

                        <Flex p='6' gap={4} flexDirection={'column'} h={{ base: '400px', md: '550px' }} position={'relative'}  >
                            <Box display='flex' flexDirection={'column'} gap={[4, 8]}>
                                <Flex justify={'space-between'} align={'center'}>
                                    <Heading textTransform={'capitalize'} fontFamily={'munayTitle'}>
                                        {filterData[0].nombre && filterData[0].nombre}
                                    </Heading>
                                    <Badge borderRadius='full' px='2' fontSize={'1.3rem'} bg={bgPrice} color={'#fff'} w={'max-content'}>
                                        S/ {filterData[0].precio}
                                    </Badge>
                                </Flex>
                            </Box>

                            <Flex h={['auto', 'auto']} overflow={'hidden'} py='2' flexDirection={'column-reverse'}>
                                <Container overflowY={'auto'} >
                                    {filterData[0].descripcion}
                                </Container>

                                <Accordion defaultIndex={[0]} allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box as="span" flex='1' textAlign='left' fontWeight={'bold'}>
                                                    Ingredientes:
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4} >
                                            {filterData[0].ingredientes.map((i, index) => (
                                                <Text key={index} >- {i}</Text>
                                            ))}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </Flex>

                            <Flex
                                position={'relative'}
                                justify={'center'}
                                align={'center'}
                                w={'max-content'}
                                bg='#58D68D'
                                p='2'
                                h={'auto'}
                                margin={'0 auto'}
                                borderRadius={[50, 50]}
                                overflow={'hidden'}>
                                <BtnAddToCart dataItem={filterData[0]} FlexDirec={'row'} />
                            </Flex>
                        </Flex>
                    </Box>
                    <Flex p='2' bg='whitesmoke' flexDirection={'column'} position={'relative'}>
                        <Heading fontSize={'1.3rem'} display={'flex'} gap={2} justifySelf={'center'} fontFamily={'munayTitle'}>
                            Más productos <BsCart4 />
                        </Heading>
                        <Flex overflowX={'scroll'} >
                            <MoreItems />
                        </Flex>
                    </Flex>
                </>

            ) : (
                <Text>cargando / vacio</Text>
            )}
        </>
    )
}

export default DetailCards