import { Button, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { useMutation, useQueryLoader } from 'react-relay';
import styled from 'styled-components';
import { autoOrders, queryOrders, scanOrders } from '../api/orders';
import { ImportOrderModal } from '../components/ImportOrderModal';
import { OrderList } from '../components/OrderList';

export const Orders = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ref, loadOrders] = useQueryLoader(queryOrders);
  const [scan, loading] = useMutation(scanOrders);
  const [auto, autoLoading] = useMutation(autoOrders);

  useEffect(() => {
    loadOrders({});
  }, []);

  return (
    <Card
      title='所有订单'
      style={{ flex: 1, overflow: 'scroll' }}
      extra={
        <ActionsWrapper>
          <Button
            type='primary'
            loading={loading}
            disabled={loading}
            style={{ marginRight: 8 }}
            onClick={() => scan({ variables: {} })}
          >
            重新扫描所有订单
          </Button>
          <Button
            type='primary'
            loading={autoLoading}
            disabled={autoLoading}
            style={{ marginRight: 8 }}
            onClick={() => auto({ variables: {} })}
          >
            全部下单
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
