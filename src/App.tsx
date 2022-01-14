import React from 'react';
import logo from './logo.svg';
import { Box, Grommet } from "grommet";
import { myTheme } from './theme';
import { CustomerDetails } from './components/CustomerDetail';
import { customer,customers, orders } from './data';
import { CustomerList } from './components/CustomerList';
import { OrderList } from './components/OrderList';




function App() {
  return (
    <Grommet theme={myTheme}>
      <Box flex={false} direction='row-responsive' wrap>
          <CustomerDetails data={ customer }></CustomerDetails>
      </Box>
          <CustomerList data={ customers }></CustomerList>
          <OrderList data={ orders }></OrderList>
    </Grommet>
  );
}

export default App;
