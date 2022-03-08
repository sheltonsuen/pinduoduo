import { Avatar, Button, List } from 'antd';
import { useCallback } from 'react';
import { useMutation, usePreloadedQuery } from 'react-relay';
import styled from 'styled-components';
import { accountLogin } from '../api/account';
import { queryAccounts } from '../api/accounts';
import { accountsQuery } from '../queries/accountsQuery.graphql';

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
    <List
      itemLayout='horizontal'
      dataSource={res.accounts as Account[]}
      renderItem={(item, i) => (
        <List.Item
          extra={
            <Button
              disabled={loading}
              loading={loading}
              onClick={() => login(item.phone)}
            >
              登录
            </Button>
          }
        >
          <List.Item.Meta
            avatar={<Avatar>{i + 1}</Avatar>}
            title={item.phone}
            description={item.status === 'loged' ? '已登录' : '未登录'}
          />
        </List.Item>
      )}
    />
  );
};

const LineWrapper = styled.div`
  display: flex;

  align-items: center;
`;
