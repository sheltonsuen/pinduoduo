import styled from "@emotion/styled";
import { Button, List, ListItem } from "@mui/material";
import { usePreloadedQuery } from "react-relay";
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

  return (
    <List>
      {res?.accounts?.map((account, i) => {
        return (
          <ListItem key={account?.id}>
            <LineWrapper>
              <em style={{ marginRight: 8 }}>{i + 1}.</em>
              <span
                style={{ marginRight: 8 }}
              >{`电话号码: ${account?.phone}`}</span>
              <span>{account?.status === "loged" ? "登录" : "未登录"}</span>
              {!account?.status && <Button>登录</Button>}
            </LineWrapper>
          </ListItem>
        );
      })}
    </List>
  );
};

const LineWrapper = styled.div`
  display: flex;

  align-items: center;
`;
