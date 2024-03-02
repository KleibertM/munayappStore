
import {Flex} from '@chakra-ui/react'
import CardComponent from './Card'
import {data} from '../data.json'

const MoreItems = () => {

    return (
        <>
            <Flex justify={'center'} align={'center'} gap={10}>
                {data.map((item) => (
                    <CardComponent dataItem={item} />
                ))}
            </Flex>
        </>
    )
}

export default MoreItems