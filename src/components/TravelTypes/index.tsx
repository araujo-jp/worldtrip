import { Grid, GridItem } from '@chakra-ui/react';
import { Type } from './Type';

export function TravelTypes() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justify="space-between"
      align="center"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1, 5]}
    >
      <GridItem>
        <Type text="vida noturna" icon="cocktail.svg" />
      </GridItem>
      <GridItem>
        <Type text="Praia" icon="surf.svg" />
      </GridItem>
      <GridItem>
        <Type text="moderno" icon="building.svg" />
      </GridItem>
      <GridItem>
        <Type text="Clássico" icon="museum.svg" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Type text="e mais..." icon="earth.svg" />
      </GridItem>
    </Grid>
  );
}
