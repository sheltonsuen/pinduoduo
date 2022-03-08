import { Button, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { useMutation, useQueryLoader } from 'react-relay';
import styled from 'styled-components';
import { createAccount } from '../api/accounts';
import { queryOrders } from '../api/orders';
import { ImportOrderModal } from '../components/ImportOrderModal';
import { OrderList } from '../components/OrderList';

export const Orders = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ref, loadOrders] = useQueryLoader(queryOrders);

  const [fetch] = useMutation(createAccount);

  useEffect(() => {
    loadOrders({});
  }, []);

  return (
    <Card
      title='所有订单'
      style={{ flex: 1 }}
      extra={
        <ActionsWrapper>
          <Button type='primary' style={{ marginRight: 8 }}>
            重新扫描所有订单
          </Button>
        </ActionsWrapper>
      }
    >
      <React.Suspense fallback='Loading'>
        {!!ref && <OrderList reference={ref}></OrderList>}
      </React.Suspense>
      {modalVisible && (
        <ImportOrderModal
          visible={modalVisible}
          onCancel={() => setModalVisible(false)}
        />
      )}
    </Card>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-flow: row-reverse;
`;
