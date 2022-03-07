import { Button, Card, Input, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { useMutation, useQueryLoader } from 'react-relay';
import styled from 'styled-components';
import { createAccount } from '../api/accounts';
import { queryOrders } from '../api/orders';
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
          <Button type='primary' onClick={() => setModalVisible(true)}>
            导入订单
          </Button>
          <Button
            style={{ marginRight: 8 }}
            onClick={() => setModalVisible(true)}
          >
            清除所有
          </Button>
        </ActionsWrapper>
      }
    >
      <React.Suspense fallback='Loading'>
        {!!ref && <OrderList reference={ref}></OrderList>}
      </React.Suspense>
      <Modal
        title='导入数据'
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          loadOrders({});
        }}
      >
        <Input placeholder='输入手机号码' />
      </Modal>
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
