import { Button, Card, Input, Modal } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useMutation, useQueryLoader } from 'react-relay';
import styled from 'styled-components';
import { createAccount, queryAccounts } from '../api/accounts';
import { AccountList } from '../components/AccountList';

export const Accounts = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ref, loadAccounts] = useQueryLoader(queryAccounts);
  const [phone, setPhone] = useState<string>('');

  const [fetch] = useMutation(createAccount);

  const handleSubmit = useCallback(() => {
    fetch({
      variables: {
        input: { userId: 'fake_id', phone },
      },
      onCompleted: () => setModalVisible(false),
    });
  }, [phone]);

  useEffect(() => {
    loadAccounts({});
  }, []);

  return (
    <Card
      title='所有账户'
      style={{ flex: 1 }}
      extra={
        <Button key='add' type='primary' onClick={() => setModalVisible(true)}>
          添加账户
        </Button>
      }
    >
      <React.Suspense fallback='Loading'>
        {!!ref && <AccountList reference={ref}></AccountList>}
      </React.Suspense>
      <Modal
        title='添加用户'
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          document.location.reload();
        }}
        onOk={handleSubmit}
      >
        <Input
          placeholder='输入手机号码'
          onChange={(v) => setPhone(v.target.value.trim())}
        />
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
