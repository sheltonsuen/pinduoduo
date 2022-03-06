import { Image } from "antd";
import * as React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Gray } from "../styles/color";

export function NavBar() {
  const history = useHistory();

  return (
    <Wrapper>
      <NavWrapper>
        <Logo
          preview={false}
          src="/logo512.png"
          onClick={() => history.push("/")}
        />
      </NavWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;

  display: flex;
  justify-content: space-between;

  height: 64px;
  background-color: ${Gray.gray1};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);

  padding: 0 32px;

  z-index: 1;
`;

const Logo = styled(Image)`
  height: 24px;
  padding-right: 16px;

  cursor: pointer;
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;
