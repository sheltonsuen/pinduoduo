import { AppstoreAddOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../components/NavBar";
import { Gray } from "../styles/color";
import { getSelectedMenuFromPath } from "../utils/route";
import { Accounts } from "./Accounts";
import { Orders } from "./Orders";

export const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState<string[]>();
  const history = useHistory();

  useEffect(() => {
    return history.listen(() =>
      setSelected(getSelectedMenuFromPath("accounts")),
    );
  }, []);

  return (
    <>
      <NavBar />
      <Wrapper>
        <RightSider
          width={240}
          collapsible
          collapsed={collapsed}
          onCollapse={(v) => setCollapsed(v)}
          defaultValue="dashboard"
        >
          <Menu
            mode="inline"
            selectedKeys={selected}
            style={{ borderRight: 0 }}
          >
            <Menu.Item
              key="accounts"
              icon={<UsergroupAddOutlined />}
              onClick={() => history.push("/accounts")}
            >
              账户管理
            </Menu.Item>
            <Menu.Item
              key="orders"
              icon={<AppstoreAddOutlined />}
              onClick={() => history.push("/orders")}
            >
              订单管理
            </Menu.Item>
          </Menu>
        </RightSider>
        <ContentWrapper>
          <Content>
            <Switch>
              <Route exact path="/accounts" component={Accounts} />
              <Route exact path="/orders" component={Orders} />
              <Route exact path="/" component={Accounts} />
            </Switch>
          </Content>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;

  margin-top: 64px;
`;

const RightSider = styled(Layout.Sider)`
  padding-top: 16px;
  background-color: white;
`;

const Content = styled.div`
  padding: 16px 0;
  margin: 0 auto;
  width: 720px;
  height: 100%;

  display: flex;
  overflow-y: scroll;
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: ${Gray.gray4};
`;
