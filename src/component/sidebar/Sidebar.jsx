import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { PiAlienFill } from "react-icons/pi";
import BtnSidebar from './BtnSidebar';
import { PiFlyingSaucerFill, PiPhoneCallFill } from "react-icons/pi";


const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
      <Button ref={btnRef} bg={'#2E4053'} borderRadius={50} onClick={onOpen}
        h={['40px', '60px']}
        w={['40px', '60px']}>
        <Text
          fontSize={'2rem'}
          color={'#58D68D'}>
          <PiAlienFill />
        </Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg='white'
          maxWidth={"15rem"}
          w={"auto"}
          h={"max-content"}
          position="fixed"
          top="0"
          right="0"
          bottom="0"
          borderRadius={4}
          p={0}
          m={0}>
          <DrawerCloseButton />
          <DrawerHeader>Munay</DrawerHeader>

          <DrawerBody >
            <BtnSidebar link={'/cart'} nameRoute={'Nave'} icon={<PiFlyingSaucerFill />} />
            <BtnSidebar link={'#contact'} nameRoute={'Contacto'} icon={<PiPhoneCallFill />}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar