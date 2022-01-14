import { Box, Heading, DataTable } from "grommet";

const columnsDefault = [
    { property: 'id', header: 'ID' },
    { property: 'name', header: 'Name' },
    { property: 'dateOfBrith', header: 'Date of birth' },
    { property: 'vipStatus', header: 'VIP' },
    { property: 'totalSum', header: 'Total sum of orders' },
  ];
  

interface CustomerListProps { 
    data: {
        id: number,
        name: string,
        dateOfBrith: string,
        vipStatus: boolean,
        totalSum: number
    }[]
}

export const CustomerList:  React.FC<CustomerListProps> = ({ data }) => (
    <Box fill="horizontal" pad="medium">
        <Heading level="3"> Customer list</Heading>
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