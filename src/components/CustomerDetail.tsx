import React from "react";
import { Box, Heading, Text } from "grommet";
import { CustomerDetailsFragment } from "../generated/graphql";

interface CustomerDetailsProps {
    data: CustomerDetailsFragment | undefined

}

export const CustomerDetails: React.FC<CustomerDetailsProps> = ({ data }) => (
    < Box round pad="medium" background="lightBlue" direction="column" >
        <Heading level="2">
            {data!.name}
        </Heading>
        <Text>
            {data!.id}
        </Text>
        <Text>
            {data!.date_of_birth}
        </Text>
        <Text>
            {String(data!.vip_status)}
        </Text>
    </Box>
)