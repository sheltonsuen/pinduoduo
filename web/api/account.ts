import { graphql } from "relay-runtime";

export const accountLogin = graphql`
  mutation accountLoginMutation($input: AccountLoginInput) {
    accountLogin(input: $input) {
      account {
        id
      }
    }
  }
`;
