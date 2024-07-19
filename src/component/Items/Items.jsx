
import {Flex, Image, Heading, Container,  } from '@chakra-ui/react'

const Items = ({image, title, text, diretionY, diretionX, idTema}) => {
    return (
        <>
         <Flex flexDirection={[diretionY, diretionX]} gap={[4, 100]} align={'center'} justify={'center'} bg={'white'} p={[6, 10]} 
         id={idTema}>
            <Flex align={'center'} justify={'center'} 
                h={['350px', '350px']}
                w={['350px', '350px']}
                borderRadius={10}
                overflow={'hidden'}
                >
                <Image 
                src={image}
                h={'100%'}
                w={'100%'}
                objectFit={'cover'}
                name={title}
                loading='lazy'
                alt={title}
                />
            </Flex>
            <Flex flexDirection={'column'} align={'center'} justify={'center'} gap={[2, 6]} >
                <Heading>{title}</Heading>
                <Container bg={'whitesmoke'} borderRadius={10} paddingY={2}>
                    {text}
                </Container>
            </Flex>
        </Flex>
        </>
    )
}

export default Items