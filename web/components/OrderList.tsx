import { Avatar, Button, List } from "antd";
import { useCallback } from "react";
import { useMutation, usePreloadedQuery } from "react-relay";
import styled from "styled-components";
import { accountLogin } from "../api/account";
import { queryOrders } from "../api/orders";
import { ordersQuery } from "../queries/ordersQuery.graphql";

type Order = {
  id: string;
  no: string;
  name: string;
  amount: number;
  price: number;
  trackNo: string | null;
  status: string | null;
};

type OrderListProps = {
  reference: any;
};

export const OrderList = ({ reference }: OrderListProps) => {
  const res = usePreloadedQuery<ordersQuery>(queryOrders, reference);
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
      itemLayout="horizontal"
      dataSource={res.orders as Order[]}
      renderItem={(item, i) => (
        <List.Item
          extra={
            item.status !== "loged" && (
              <Button disabled={loading} onClick={() => null}>
                下单
              </Button>
            )
          }
        >
          <List.Item.Meta
            avatar={<Avatar>{i + 1}</Avatar>}
            title={item.name}
            description={item.status === "done" ? "下单完成" : "未下单"}
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
