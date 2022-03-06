import { graphql } from "relay-runtime";

export const queryOrders = graphql`
  query ordersQuery {
    orders {
      id
      no
      name
      amount
      price
      trackNo
      status
    }
  }
`;
