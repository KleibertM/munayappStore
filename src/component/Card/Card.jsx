import {
    Flex, Box, Text, 
} from '@chakra-ui/react'
// import ImageRender from './ImageRender';
import {Link} from 'react-router-dom'
import BtnAddToCart from '../btn/BtnAddToCart';
import { lazy } from 'react';


const ImageRender = lazy(()=> import('./ImageRender'))
 
const CardComponent = ({ dataItem }) => {
    const { id, nombre, descripcion, image, precio, ingredientes, estado, tipo } = dataItem
    
    let bgPrice = tipo ? '#58D68D' : '#9b59b6';
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
                    outline = {`2px solid ${bgPrice}`}
                >
                    <Link to={`/detail/${id}`}>
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
                                fontFamily={'munayTitle'}
                            >
                                {nombre}
                            </Text>

                            <Text bg={bgPrice}
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
                    </Link>
                </Box>
                <Flex gap={2} justify={'space-around'} w={['10rem', '250px']}>
                    < BtnAddToCart  dataItem={dataItem} />
                </Flex>
            </Flex>
        </>
    )
}

export default CardComponent