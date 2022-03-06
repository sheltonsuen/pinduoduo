import { Button, Input, Modal } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useMutation, useQueryLoader } from "react-relay";
import styled from "styled-components";
import { createAccount, queryAccounts } from "../api/accounts";
import { AccountList } from "./AccountList";

export const Accounts = () => {
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
    <Wrapper>
      <ActionsWrapper>
        <Button type="primary" onClick={() => setModalVisible(true)}>
          添加账户
        </Button>
      </ActionsWrapper>
      <React.Suspense fallback="Loading">
        {!!ref && <AccountList reference={ref}></AccountList>}
      </React.Suspense>
      <Modal
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
          loadAccounts({});
        }}
      >
        <ModalWrapper>
          <h1>创建账户</h1>
          <Input
            placeholder="输入手机号码"
            onChange={(v) => setPhone(v.target.value.trim())}
          />
          <Button onClick={handleSubmit}>确认添加</Button>
        </ModalWrapper>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 16px 64px;
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-flow: row-reverse;
`;

const ModalWrapper = styled.div`
  padding: 16px;
  background: white;

  position: absolute;
  top: 40vh;
  left: 30vw;
`;
