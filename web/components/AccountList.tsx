import { Button, List } from "antd";
import { useCallback } from "react";
import { useMutation, usePreloadedQuery } from "react-relay";
import styled from "styled-components";
import { accountLogin } from "../api/account";
import { queryAccounts } from "../api/accounts";
import { accountsQuery } from "../queries/accountsQuery.graphql";

type Account = {
  id: string;
  phone: string;
  data: string | null;
  status: string | null;
};

type AccountListProps = {
  reference: any;
};

export const AccountList = ({ reference }: AccountListProps) => {
  const res = usePreloadedQuery<accountsQuery>(queryAccounts, reference);
  const [fetch, loading] = useMutation(accountLogin);

  const login = useCallback(
    (phone: string) => {
      fetch({
        variables: {
          input: {
            phone,
          },
        },
      });
    },
    [fetch],
  );

  return (
    <List>
      {res?.accounts?.map((account, i) => {
        return (
          <List.Item key={account?.id}>
            <LineWrapper>
              <em style={{ marginRight: 8 }}>{i + 1}.</em>
              <span
                style={{ marginRight: 8 }}
              >{`电话号码: ${account?.phone}`}</span>
              <span>{account?.status === "loged" ? "已登录" : "未登录"}</span>
              {!account?.status && (
                <Button
                  disabled={loading}
                  onClick={() => login(account?.phone ?? "")}
                >
                  登录
                </Button>
              )}
            </LineWrapper>
          </List.Item>
        );
      })}
    </List>
  );
};

const LineWrapper = styled.div`
  display: flex;

  align-items: center;
`;
