import { Box, Heading, DataTable, TableRow, MouseClick } from "grommet";
import { Centos } from "grommet-icons";
import { idText } from "typescript";
import { GetCustomersQuery } from "../generated/graphql";

const columnsDefault = [
    { property: 'id', header: 'ID' },
    { property: 'name', header: 'Name' },
    { property: 'date_of_birth', header: 'Date of birth' },
    { property: 'vip_status', header: 'VIP' },
    { property: 'sum_of_orders', header: 'Total sum of orders' }
  ];
  

export const CustomerList:  React.FC<GetCustomersQuery> = ({ customer}) => (
    <Box fill="horizontal" pad="medium">
        <Heading level="3"> Customer list</Heading>
        <DataTable columns={columnsDefault}
            data={customer}
            primaryKey={false}
            border={{
                color: 'border',
                side: 'vertical',
                size: '1px',
            }}
            onClickRow={(event) => {
                alert(event.datum.name)
            }}
        />
    </Box>

)