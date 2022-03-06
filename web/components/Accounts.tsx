import styled from "@emotion/styled";
import { Button, Input, Modal } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useMutation, useQueryLoader } from "react-relay";
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
        <Button variant="contained" onClick={() => setModalVisible(true)}>
          添加账户
        </Button>
      </ActionsWrapper>
      <React.Suspense fallback="Loading">
        {!!ref && <AccountList reference={ref}></AccountList>}
      </React.Suspense>
      <Modal
        open={modalVisible}
        onClose={() => {
          setModalVisible(false);
          loadAccounts({});
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
