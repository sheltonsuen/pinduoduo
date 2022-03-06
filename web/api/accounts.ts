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
