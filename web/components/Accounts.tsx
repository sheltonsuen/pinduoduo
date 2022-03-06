import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const Accounts = () => {
  return (
    <Wrapper>
      <ActionsWrapper>
        <Button variant="contained">添加账户</Button>
      </ActionsWrapper>
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
