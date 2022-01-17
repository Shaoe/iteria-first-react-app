import { Box, Heading, DataTable } from "grommet";

const columnsDefault = [
    { property: 'id', header: 'ID' },
    { property: 'dateOfOrder', header: 'Date of order' },
    { property: 'sum', header: 'Sum of order' },
    { property: 'numberOfProducts', header: 'Number of products' },
  ];
  

interface OrderListProps { 
    data: {
        id: number,
        dateOfOrder: string,
        sum: number,
        numberOfProducts: number
    }[] | undefined
}


export const OrderList:  React.FC<OrderListProps> = ({ data }) => (
    <Box fill="horizontal" pad="medium">
        <Heading level="3"> Orders </Heading>
        <DataTable columns={columnsDefault}
            data={data}
            primaryKey={false}
            border={{
                color: 'border',
                side: 'vertical',
                size: '1px',
            }}
        />
    </Box>

)
