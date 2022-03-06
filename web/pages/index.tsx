import {
  AlertOutlined,
  AppstoreAddOutlined,
  LineChartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Accounts } from "../components/Accounts";
import { NavBar } from "../components/NavBar";
import { Gray } from "../styles/color";
import { getSelectedMenuFromPath } from "../utils/route";

export const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

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
            selectedKeys={getSelectedMenuFromPath("datasets")}
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
              key="projects"
              icon={<LineChartOutlined />}
              onClick={() => history.push("/projects")}
            >
              时序预测
            </Menu.Item>
            <Menu.Item
              key="services"
              icon={<AppstoreAddOutlined />}
              onClick={() => history.push("/publications")}
            >
              应用管理
            </Menu.Item>
            <Menu.Item
              key="optimus"
              icon={<AlertOutlined />}
              onClick={() => history.push("/optimus/tasks")}
            >
              优化引擎
            </Menu.Item>
          </Menu>
        </RightSider>
        <Content>
          <Switch>
            <Route exact path="/accounts" component={Accounts} />
            <Route exact path="/" component={Accounts} />
          </Switch>
        </Content>
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
  flex: 1;

  display: flex;
  overflow-y: scroll;
  background-color: ${Gray.gray4};
`;
