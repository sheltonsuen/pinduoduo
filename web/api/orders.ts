import { graphql } from 'relay-runtime';
export const autoOrder = graphql`
  mutation ordersMutation($input: AutoOrderInput!) {
    autoOrder(input: $input) {
      order {
        id
      }
    }
  }
`;

export const queryOrders = graphql`
  query ordersQuery {
    orders {
      bookAt
      purchaseAccount
      bookAccount
      bookStore
      bookPrice
      trackNo

      selfNo
      address
      spec
      amount
      salesPrice
      selfStore
      product

      status
    }
  }
`;
