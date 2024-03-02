import { Flex, Image, Text, Avatar, keyframes } from '@chakra-ui/react'
import { PiAlienFill, PiFlyingSaucerFill } from "react-icons/pi";
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
            <Flex flexDirection={'column'} align={'center'} justify={'center'} gap={4} animation={myAnimate}>

                <Text fontSize={['20rem', 'auto']} 
                color={'green.500'}>
                    <PiFlyingSaucerFill />
                </Text>
                <Text fontSize={'1.5rem'} fontWeight={'bold'}>
                    ¡No tienes productos en la nave!
                </Text>
            </Flex>
        </>
    )
}

export default CartNull