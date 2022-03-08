import { graphql } from 'relay-runtime';
export const scanOrders = graphql`
  mutation ordersMutation {
    scanOrders {
      orders {
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
