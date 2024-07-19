
import {Flex} from '@chakra-ui/react'
import CardComponent from './Card'
import {dataMunay} from '../Data/data'

const MoreItems = () => {

    return (
        <>
            <Flex justify={'center'} align={'center'} gap={10}>
                {dataMunay.map((item) => (
                    <CardComponent dataItem={item} />
                ))}
            </Flex>
        </>
    )
}

export default MoreItems