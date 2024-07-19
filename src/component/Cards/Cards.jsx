import CardComponent from '../Card/Card'
// import { data } from '../Data/data.json'
import { dataMunay } from '../Data/data'
import { Grid, GridItem } from '@chakra-ui/react'
const CardsContent = ({stateFilter}) => {
    const filterData = dataMunay.filter((item) => item.tipo === stateFilter)
    return (
        <>
            <Grid h='auto'
                templateRows={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)']}
                gap={[4, 8]} position={'relative'} 
                >
                {filterData.map((item, index) => (
                    <>
                        <GridItem key={index} margin={'0 auto'} >
                            <CardComponent dataItem={item} />
                        </GridItem>
                    </>
                ))}
            </Grid>
        </>

    )
}

export default CardsContent