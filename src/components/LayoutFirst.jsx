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

  const breakpoints = {
    sm: '2em',
    md: '2.5em',
    lg: '3.5em',
    xl: '5em',
    '2xl': '6em',
  }
  return (
    <Box p="0.5rem" pt="4rem" height="90vh" m="auto">
      <SimpleGrid columns={[1, 3]} width="100%" height="100%">
        <Box bg="#0072BB" {...TextStyles} fontSize={breakpoints}>
          NAV
        </Box>
        <Box bg="#F8931D" {...TextStyles} 
        fontSize={breakpoints}>
          CONTENT
        </Box>
        <Box bg="red" {...TextStyles}
        fontSize={breakpoints}>
          WIDGET
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default LayoutFirst;
