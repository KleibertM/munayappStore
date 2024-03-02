import { Button, Text } from '@chakra-ui/react'
import {Link} from 'react-router-dom'

const BtnSidebar = ({link, nameRoute, icon}) => {
    return (
        <>
        <Link to={link}>
            <Button w={'100%'} marginY={1} justifyContent={'space-between'} alignContent={'center'}>
                <Text>{nameRoute}</Text>
                <Text fontSize={'1.5rem'}>{icon}</Text>
            </Button>
        </Link>
        </>
    )
}

export default BtnSidebar