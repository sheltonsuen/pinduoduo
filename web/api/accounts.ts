import { graphql } from "relay-runtime";

export const createAccount = graphql`
  mutation accountsMutation($input: CreateAccountInput!) {
    createAccount(input: $input) {
      account {
        id
        phone
        data
        status
      }
    }
  }
`;

export const queryAccounts = graphql`
  query accountsQuery {
    accounts {
      id
      phone
      data
      status
    }
  }
`;
