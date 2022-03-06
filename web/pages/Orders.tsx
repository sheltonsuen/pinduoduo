import { Button, Card, Input, Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useMutation, useQueryLoader } from "react-relay";
import styled from "styled-components";
import { createAccount, queryAccounts } from "../api/accounts";
import { AccountList } from "../components/AccountList";

export const Orders = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [ref, loadAccounts] = useQueryLoader(queryAccounts);
  const [phone, setPhone] = useState<string>("");

  const [fetch] = useMutation(createAccount);

  const handleSubmit = useCallback(() => {
    fetch({
      variables: {
        input: { userId: "fake_id", phone },
      },
      onCompleted: () => setModalVisible(false),
    });
  }, [phone]);

  useEffect(() => {
    loadAccounts({});
  }, []);

  return (
    <Card title="所有订单" style={{ flex: 1 }}>
      <Wrapper>
        <ActionsWrapper>
          <Button type="primary" onClick={() => setModalVisible(true)}>
            导入订单
          </Button>
          <Button
            style={{ marginRight: 8 }}
            onClick={() => setModalVisible(true)}
          >
            清除所有
          </Button>
        </ActionsWrapper>
        <React.Suspense fallback="Loading">
          {!!ref && <AccountList reference={ref}></AccountList>}
        </React.Suspense>
        <Modal
          title="导入数据"
          visible={modalVisible}
          onCancel={() => {
            setModalVisible(false);
            loadAccounts({});
          }}
          onOk={handleSubmit}
        >
          <Input
            placeholder="输入手机号码"
            onChange={(v) => setPhone(v.target.value.trim())}
          />
        </Modal>
      </Wrapper>
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
