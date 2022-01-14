import React from "react";
import { Box, Heading, Text } from "grommet";

interface CustomerDetailsProps {
    data: {
        id: number,
        name: string,
        dateOfBrith: string,
        vipStatus: boolean
    }

}

export const CustomerDetails: React.FC<CustomerDetailsProps> = ({ data }) => (
    <Box round pad="medium" background="lightBlue" direction="column" >
        <Heading level="2" >
            {data.name}
        </Heading>
        <Text>
            {data.id}
        </Text>
        <Text>
            {data.dateOfBrith}
        </Text>
        <Text>
            {data.vipStatus}
        </Text>
    </Box>
)