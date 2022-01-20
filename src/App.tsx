import { Box, Grommet, KeyPress, MouseClick, TextInput } from "grommet";
import { myTheme } from './theme';
import { CustomerDetails } from './components/CustomerDetail';
import { customer } from './data';
import { CustomerList } from './components/CustomerList';
import { OrderList } from './components/OrderList';
import { Customer, CustomerDetailsFragment, GetCustomersQuery, GetOrdersQuery, Order, useGetCustomerQuery, useGetCustomersQuery, useGetOrdersQuery } from './generated/graphql';
import { useEffect, useState } from "react";
import { debug } from "console";




function App() {
  const [focusedCustomer, setFocusedCustomer] = useState(1);

  const handleRowClick = (event: (MouseClick<CustomerDetailsFragment>)
  | KeyPress<CustomerDetailsFragment>) => {
    event.preventDefault();
    setFocusedCustomer(event.datum.id);
  };

  const { loading: customersLoading, data: customersData } = useGetCustomersQuery({
    variables: {
    },
  });

  const { loading: ordersLoading, data: orders } = useGetOrdersQuery({
    variables: {
      customerid: focusedCustomer
    },
  });

  if (customersLoading || ordersLoading) return (<Box>'Loading...'</Box>);
  debugger;
  return (
    <Grommet theme={myTheme}>

      <Box flex={false} direction='row-responsive' wrap>
        <CustomerDetails data={customer}></CustomerDetails>
      </Box>
      <CustomerList
        customer={customersData!}
        handleRowClick={handleRowClick}
      ></CustomerList>
      <OrderList order={orders!.order}></OrderList>
    </Grommet>
  );
}

export default App;
