import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query GetCustomers {
    customer {
        id
        name
        date_of_birth
        sum_of_orders
        vip_status
      }
  }
`;