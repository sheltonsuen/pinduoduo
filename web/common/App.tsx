/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import * as React from "react";
import { Environment, RelayEnvironmentProvider } from "react-relay";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import type { Config } from "../config";
import { AuthProvider, ConfigContext } from "../core";
import { Home } from "../pages";

const GlobalStyle = createGlobalStyle`
  #root {
    height: 100%;
    width: 100%;
  }
`;

type AppProps = {
  config: Config;
  relay: Environment;
};

class App extends React.Component<AppProps> {
  state = {
    error: undefined as Error | undefined,
  };

  static getDerivedStateFromError(error: Error): { error: Error } {
    return { error };
  }

  dispose?: () => void;

  componentWillUnmount(): void {
    if (this.dispose) this.dispose();
  }

  componentDidCatch(error: Error, errorInfo: unknown): void {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render(): JSX.Element {
    const { config } = this.props;

    return (
      <ConfigContext.Provider value={config}>
        <RelayEnvironmentProvider environment={this.props.relay}>
          <AuthProvider>
            <BrowserRouter>
              <>
                <GlobalStyle />
                <Home />
              </>
            </BrowserRouter>
          </AuthProvider>
        </RelayEnvironmentProvider>
      </ConfigContext.Provider>
    );
  }
}

export { App };
