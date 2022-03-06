import styled from "@emotion/styled";
import { Button, Input, Modal } from "@mui/material";
import { useCallback, useState } from "react";
import { useMutation } from "react-relay";
import { createAccount } from "../api/accounts";

export const Accounts = () => {
  const [modalVisible, setModalVisible] = useState(false);
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

  return (
    <Wrapper>
      <ActionsWrapper>
        <Button variant="contained" onClick={() => setModalVisible(true)}>
          添加账户
        </Button>
      </ActionsWrapper>
      <Modal
        open={modalVisible}
        onClose={() => setModalVisible(false)}
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
