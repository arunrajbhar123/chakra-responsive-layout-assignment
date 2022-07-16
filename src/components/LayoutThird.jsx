import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import './ThirdStyles.css';
const LayoutThird = () => {
  return (
    <Box
      p="0.5rem"
      pt="4rem"
      height="90vh"
      margin="auto"
      width="95%"
      className="Box"
    >
      <Grid
        height="100%"
        templateAreas={`
        "header header header"
        "main main main"
        "footer footer footer"`}
        templateColumns={`"auto" "auto" "auto" "auto"`}
        gap={4}
        className="grid"
      >
        <GridItem colSpan={1} area={'header'} bg="yellow" />
        <GridItem colSpan={1} area={'header'} bg="yellow" />

        <GridItem colSpan={3} area={'main'} bg="pink" />
        <GridItem colSpan={1} area={'footer'} bg="blue" />
        <GridItem colSpan={1} area={'footer'} bg="blue" />
        <GridItem colSpan={1} area={'footer'} bg="blue" />
      </Grid>
    </Box>
  );
};

export default LayoutThird;
