import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'
// import CardsContent from '../Cards/Cards'
import { lazy, Suspense } from 'react';

const CardsContent = lazy(()=> import('../Cards/Cards'))


const TabsNav = () => {

  return (
    <Tabs isFitted variant='enclosed'>
      <TabList mb='1em'>
        <Tab fontSize={'1.5rem'} >Tradiconal</Tab>
        <Tab fontSize={'1.5rem'}>Especiales</Tab>
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