import { Button, Text, Tooltip, keyframes } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useCart } from '../../hook/cartHook'

const animation = keyframes
    `from {
    opacity: 0
}
to {
    opacity: 1
}
`
    ;

const BtnSidebar = ({ link, nameRoute, icon }) => {
    const { cart } = useCart()
    const myAnimate = ` ${animation} both 1s`

    return (
        <>
            <Link to={link}>
                <Tooltip label={'Nave de compras'} placement={'left'} >
                    <Button
                        h={['40px', '60px']}
                        w={'max-content'}
                        position={'relative'} marginY={1} justifyContent={'center'} alignContent={'center'}
                        borderRadius={50}
                        bg={' #58D68D'}
                        color={'#2E4053'}
                        border={'1px solid #2E4053'}
                        name='menu lateral'
                        gap={1}
                        fontFamily={'munayTitle'}
                    >
                        <Text>{nameRoute}</Text>
                        <Text>Nave</Text>
                        <Text fontSize={'1.5rem'}>{icon}</Text>
                        <Text h={['10px', '20px']} w={['10px', '20px']} position={'absolute'} bg='red' borderRadius={50} display={cart.length ? 'block' : 'none'} top={'0'} right={'0'} fontSize={['.5rem', '1rem']} color={'#FFF'}

                            animation={myAnimate}> {cart.length} </Text>
                    </Button>
                </Tooltip>
            </Link>
        </>
    )
}

export default BtnSidebar