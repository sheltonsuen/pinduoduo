import { graphql } from "relay-runtime";
export const autoOrder = graphql`
  mutation ordersMutation($input: AutoOrderInput!) {
    autoOrder(input: $input) {
      order {
        id
        no
      }
    }
  }
`;

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
