import { Box, Heading, DataTable } from "grommet";
import { GetOrdersQuery, useGetOrdersQuery } from "../generated/graphql";

const columnsDefault = [
    { property: 'id', header: 'ID' },
    { property: 'date_of_order', header: 'Date of order' },
    { property: 'sum', header: 'Sum of order' },
    { property: 'number_of_products', header: 'Number of products' },
  ];
  

export const OrderList:  React.FC<GetOrdersQuery> = ({ order }) => (
    <Box fill="horizontal" pad="medium">
        <Heading level="3"> Orders </Heading>
        <DataTable columns={columnsDefault}
            data={order}
            primaryKey={false}
            border={{
                color: 'border',
                side: 'vertical',
                size: '1px',
            }}
        />
    </Box>

)
