import { Avatar, Button, List } from 'antd';
import { useCallback } from 'react';
import { useMutation, usePreloadedQuery } from 'react-relay';
import styled from 'styled-components';
import { autoOrder, queryOrders } from '../api/orders';
import { ordersQuery } from '../queries/ordersQuery.graphql';

type Order = {
  bookAt: string | null;
  purchaseAccount: string | null;
  bookAccount: string | null;
  bookStore: string | null;
  bookPrice: number | null;
  trackNo: string | null;

  selfNo: string | null;
  address: string | null;
  spec: string | null;
  amount: number | null;
  salesPrice: number | null;
  selfStore: string | null;
  product: string | null;

  status: string | null;
};

type OrderListProps = {
  reference: any;
};

export const OrderList = ({ reference }: OrderListProps) => {
  const res = usePreloadedQuery<ordersQuery>(queryOrders, reference);
  const [fetch, loading] = useMutation(autoOrder);

  const handleAutoOrder = useCallback(
    (no: string) => {
      fetch({
        variables: {
          input: {
            no,
          },
        },
      });
    },
    [fetch],
  );

  return (
    <List
      itemLayout='horizontal'
      dataSource={res.orders as unknown as Order[]}
      renderItem={(item, i) => (
        <List.Item
          extra={
            item.status !== 'loged' && (
              <Button
                disabled={loading}
                loading={loading}
                onClick={() => handleAutoOrder(item.selfNo ?? '')}
              >
                下单
              </Button>
            )
          }
        >
          <List.Item.Meta
            avatar={<Avatar>{i + 1}</Avatar>}
            title={`订单号: ${item.selfNo}`}
            description={item.status === 'done' ? '下单完成' : '未下单'}
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
