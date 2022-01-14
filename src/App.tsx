import React from 'react';
import logo from './logo.svg';
import { Box, Grommet } from "grommet";

const theme = {
  name: "default",
  rounding: 4,
  spacing: 24,
  global: {
    font: {
      family: "'Roboto'"
    }
  }
};


function App() {
  return (
    <Grommet theme={theme}>
      <Box pad="small">Grommet v2</Box>
    </Grommet>
  );
}

export default App;
