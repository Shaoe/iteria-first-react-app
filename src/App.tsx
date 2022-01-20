import { Box, Grommet, KeyPress, MouseClick, TextInput } from "grommet";
import { myTheme } from './theme';
import { CustomerDetails } from './components/CustomerDetail';
import { CustomerList } from './components/CustomerList';
import { OrderList } from './components/OrderList';
import { Customer, CustomerDetailsFragment, useGetCustomersQuery, useGetOrdersQuery } from './generated/graphql';
import { useEffect, useState } from "react";
import { debug } from "console";
import internal from "stream";




function App() {
  const [customerId, setCustomerID] = useState(-1);
  const [focusedCustomer,setFocusedCustomer] = useState<CustomerDetailsFragment | undefined>(undefined);

  const handleRowClick = (event: (MouseClick<CustomerDetailsFragment>)
  | KeyPress<CustomerDetailsFragment>) => {
    event.preventDefault();
    setFocusedCustomer(event.datum);
    setCustomerID(event.datum.id)

  };

  const { loading: customersLoading, data: customersData } = useGetCustomersQuery({
    variables: {
    },
  });

  const { data: orders } = useGetOrdersQuery({
    variables: {
      customerid: customerId
    },
  });
  if (customersLoading) return (<Box>'Loading...'</Box>);



  return (
    <Grommet theme={myTheme}>

      <Box flex={false} direction='row-responsive' wrap>
        {focusedCustomer && <CustomerDetails data={focusedCustomer}></CustomerDetails>}
      </Box>
      <CustomerList
        customer={customersData!}
        handleRowClick={handleRowClick}
      ></CustomerList>
      {orders && <OrderList order={orders!.order}></OrderList>}
    </Grommet>
  );
}

export default App;
