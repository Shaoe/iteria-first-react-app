import { Box, Grommet } from "grommet";
import { myTheme } from './theme';
import { CustomerDetails } from './components/CustomerDetail';
import { customer } from './data';
import { CustomerList } from './components/CustomerList';
import { OrderList } from './components/OrderList';
import { useGetCustomerQuery, useGetCustomersQuery, useGetOrdersQuery } from './generated/graphql';




function App() {

  const { data:customers_data  } = useGetCustomersQuery({
    variables: {
    },
  });

  const customers = customers_data?.customer.map((customer) => {
    return {
      id: customer.id,
      name: customer.name,
      dateOfBrith: customer.date_of_birth,
      vipStatus: customer.vip_status,
      totalSum: customer.sum_of_orders
    }
  });

  const { data:order_data } = useGetOrdersQuery({
      variables: {
        customerid: 1
      },
    });

    const orders = order_data?.order.map((order) => {
      return {
        id: order.id,
        dateOfOrder: order.date_of_order,
        sum: order.sum,
        numberOfProducts: order.number_of_products
      }
    });


  return (
    <Grommet theme={myTheme}>
      <Box flex={false} direction='row-responsive' wrap>
        <CustomerDetails data={customer}></CustomerDetails>
      </Box>
      <CustomerList data={customers}></CustomerList>
      <OrderList data={orders}></OrderList>
    </Grommet>
  );
}

export default App;
