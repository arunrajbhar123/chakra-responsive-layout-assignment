import React from 'react';
import {
  Container,
  Box,
  Text,
  Grid,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react';
const LayoutFirst = () => {
  const TextStyles = {
    fontSize: '5xl',
    color: '#fff',
    display:"flex",
    alignItems: "center",
    justifyContent: "center",

    
  };
  return (
    <Box p="0.5rem" pt="4rem" height="90vh">
      <SimpleGrid columns={[1, 3]} width="100%" height="100%">
        <Box bg="#0072BB" {...TextStyles}>
          NAV
        </Box>
        <Box bg="#F8931D" {...TextStyles}>
          CONTENT
        </Box>
        <Box bg="red" {...TextStyles}>
          WIDGET
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default LayoutFirst;
