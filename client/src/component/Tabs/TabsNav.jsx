import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'
// import CardsContent from '../Cards/Cards'
import { lazy } from 'react';

const CardsContent = lazy(()=> import('../Cards/Cards'))


const TabsNav = () => {

  return (
    <Tabs isFitted variant='enclosed'>
      <TabList mb='1em'>
        <Tab fontSize={'1.5rem'} fontFamily={'munayTitle'} name='Sabores tradicional'>Tradicional</Tab>
        <Tab fontSize={'1.5rem'} fontFamily={'munayTitle'} name='Sabores especiales' >Especiales</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <CardsContent stateFilter={true} />
        </TabPanel>
        <TabPanel>
          <CardsContent stateFilter={false} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default TabsNav