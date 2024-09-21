
import { Flex, Image,Highlight, Heading, Container, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react'

const Items = ({ image, title, text, diretionY, diretionX, idTema, resaltarText }) => {
    return (
        <>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left' fontFamily={'munayTitle'}>
                                {title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                                <Heading fontFamily={'munayTitle'}>{title}</Heading>
                                <Container bg={'whitesmoke'} borderRadius={10} paddingY={2}>
                                    <Highlight query={resaltarText} styles={{ px: '1', bg: '#58D68D', borderRadius: '10px', fontWeight: '500'}}>
                                        {text}
                                    </Highlight>
                                </Container>
                            </Flex>
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default Items