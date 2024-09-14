
import {Flex} from '@chakra-ui/react'
import CardComponent from './Card'
import {dataMunay} from '../Data/data'

const MoreItems = () => {

    return (
        <>
            <Flex justify={'center'} align={'center'} gap={10} paddingY={4} marginX={2}>
                {dataMunay.map((item, index) => (
                    <CardComponent dataItem={item} key={index}/>
                ))}
            </Flex>
        </>
    )
}

export default MoreItems