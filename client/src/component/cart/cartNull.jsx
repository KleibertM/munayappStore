import { Flex, Text, keyframes } from '@chakra-ui/react'
import {  PiFlyingSaucerFill } from "react-icons/pi";
const animation = keyframes
    `from {
    opacity: 0
}
to {
    opacity: 1
}
`
    ;

const CartNull = () => {
    const myAnimate = ` ${animation} both 1s`
    return (
        <>
            <Flex flexDirection={'column'} align={'center'} justify={'center'} gap={4} animation={myAnimate} h={'80vh'}>

                <Text fontSize={['20rem', 'auto']} 
                color={'#58D68D'}>
                    <PiFlyingSaucerFill />
                </Text>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>
                    ¡No tienes marcianos en la nave!
                </Text>
            </Flex>
        </>
    )
}

export default CartNull