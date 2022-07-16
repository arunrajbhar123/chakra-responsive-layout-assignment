import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
 
  VStack,
  Code,
  Grid,
  theme,
  Stack,Container
} from '@chakra-ui/react';

import { Link, Routes, Route } from 'react-router-dom';
import LayoutFirst from "./components/LayoutFirst";
import LayoutSecond from "./components/LayoutSecond";
import LayoutThird from "./components/LayoutThird";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container textAlign="center"  width="25rem">
      
        <Stack direction="vertical" gap={"12px"}>
          <Link to="layoutfirst">Layout First</Link>
          <Link to="layoutsecond">Layout Second</Link>
          <Link to="layoutthird">Layout Third</Link>
        </Stack>
      </Container>
      <Routes>
        <Route path="layoutfirst" element={<LayoutFirst />} />
        <Route path="layoutsecond" element={<LayoutSecond />} />
        <Route path="layoutthird" element={<LayoutThird/>} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
