import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';
const LayoutSecond = () => {
  return (
    <Box p="0.5rem" pt="4rem" height="90vh" margin="auto" width="95%">
      <Grid
        width="100%"
        height="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        overflow="hidden"
      >
        <GridItem colSpan={3} height="22rem" bg="#A186BD" />
        <GridItem colSpan={2} rowSpan={2} bg="#F26C4F" />
        <GridItem colSpan={3} height="15rem" bg="#6DCFF6" />
      </Grid>
    </Box>
  );
};

export default LayoutSecond;
