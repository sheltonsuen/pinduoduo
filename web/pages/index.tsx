import {
  AlertOutlined,
  AppstoreAddOutlined,
  DatabaseOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Divider, Layout, Menu } from "antd";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Accounts } from "../components/Accounts";
import { useHistory } from "../core";
import { getSelectedMenuFromPath } from "../utils/route";

export const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  const history = useHistory();

  return (
    <>
      <Wrapper>
        <RightSider
          width={240}
          collapsible
          collapsed={collapsed}
          onCollapse={(v) => setCollapsed(v)}
          defaultValue="dashboard"
        >
          <Divider />
          <Menu
            mode="inline"
            selectedKeys={getSelectedMenuFromPath("datasets")}
            style={{ borderRight: 0 }}
          >
            <Menu.Item
              key="datasets"
              icon={<DatabaseOutlined />}
              onClick={() => history.push("/datasets")}
            >
              数据集
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
          </Switch>
        </Content>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100%;

  display: flex;
`;

const RightSider = styled(Layout.Sider)`
  background-color: white;
`;

const Content = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  overflow-y: scroll;
`;
