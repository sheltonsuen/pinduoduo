/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import styled from "@emotion/styled";
import { FunctionComponent, useState } from "react";
import { Accounts } from "../components/Accounts";
import { SideBar } from "../components/SideBar";
import { type HomeQuery$data } from "../queries/HomeQuery.graphql";

export enum HomeContent {
  Accounts,
}

const ContentComp: Record<HomeContent, FunctionComponent> = {
  [HomeContent.Accounts]: Accounts,
};

function Home(props: HomeQuery$data): JSX.Element {
  const [content, setContent] = useState<HomeContent>();
  const Comp = (content ? ContentComp[content] : undefined) as
    | FunctionComponent
    | undefined;

  return (
    <Wrapper>
      <SideBar value={content} onChange={(v) => setContent(v)} />
      <Content>{Comp && <Comp />}</Content>
    </Wrapper>
  );
}

export default Home;
export type Home = typeof Home;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
`;

const Content = styled.div`
  flex: 1;
`;
