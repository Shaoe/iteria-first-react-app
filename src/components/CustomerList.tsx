import { Box, Heading, DataTable, TableRow, MouseClick, KeyPress } from "grommet";
import { CustomerDetailsFragment, GetCustomersQuery } from "../generated/graphql";

const columnsDefault = [
    { property: 'id', header: 'ID' },
    { property: 'name', header: 'Name' },
    { property: 'date_of_birth', header: 'Date of birth' },
    { property: 'vip_status', header: 'VIP' },
    { property: 'sum_of_orders', header: 'Total sum of orders' }
  ];



  interface Props{
      customer: GetCustomersQuery,
      handleRowClick: (event: (MouseClick<CustomerDetailsFragment>
      | KeyPress<CustomerDetailsFragment>)) => void
    }

    export const CustomerList:  React.FC<Props>  = ({ customer, handleRowClick }) => (
    <Box fill="horizontal" pad="medium">
        <Heading level="3"> Customer list</Heading>
        <DataTable columns={columnsDefault}
            data={customer.customer}
            primaryKey={false}
            border={{
                color: 'border',
                side: 'vertical',
                size: '1px',
            }}
            ///onClickRow={(event) => {alert(event.datum.name)}}
            onClickRow={handleRowClick}
        />
    </Box>

)