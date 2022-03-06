import { graphql } from "relay-runtime";

export const createAccount = graphql`
  mutation accountsMutation($input: CreateAccountInput!) {
    createAccount(input: $input) {
      user {
        id
        phone
        data
        status
      }
    }
  }
`;
