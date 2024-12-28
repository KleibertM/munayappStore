import { Button, Link as ChakraLink, Text } from '@chakra-ui/react'

const BtnLink = ({link, icon}) => {
    return (
            <ChakraLink href={link} target="_blank">
                    <Button bg={'#000'} variant='outline' borderRadius={50}
                    h={['40px', '50px']}
                    w={['40px', '50px']}
                    alignContent={'center'}
                    justifyContent={'center'}
                    name='enlace social'
                    >
                        <Text fontSize={'2rem'} color={'#fff'}>
                            {icon}
                        </Text>
                    </Button>
                </ChakraLink>
    )
}

export default BtnLink