import { Box, Grommet, TextInput } from "grommet";
import { myTheme } from './theme';
import { CustomerDetails } from './components/CustomerDetail';
import { customer } from './data';
import { CustomerList } from './components/CustomerList';
import { OrderList } from './components/OrderList';
import { GetOrdersQuery, Order, useGetCustomerQuery, useGetCustomersQuery, useGetOrdersQuery } from './generated/graphql';
import { useEffect, useState } from "react";
import { debug } from "console";




function App() {
  const [value, setValue] = useState('1');

  const { loading: ordersLoading,data: orders } = useGetOrdersQuery({
    variables: {
      customerid: +value
    },
  });

  const { loading: customersLoading,data: customersData } = useGetCustomersQuery({
    variables: {
    },
  });

  if (customersLoading || ordersLoading) return (<Box>'Loading...'</Box>);

  

  return (
    <Grommet theme={myTheme}>
      <TextInput
      placeholder="type here"
      value={value}
      onChange={event => setValue(event.target.value)}
    />
      <Box flex={false} direction='row-responsive' wrap>
        <CustomerDetails data={customer}></CustomerDetails>
      </Box>
      <CustomerList customer={customersData!.customer}></CustomerList>
      <OrderList order={orders!.order}></OrderList>
    </Grommet>
  );
}

export default App;
