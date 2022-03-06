/* SPDX-FileCopyrightText: 2016-present Kriasoft <hello@kriasoft.com> */
/* SPDX-License-Identifier: MIT */

import * as React from "react";
import { Environment, RelayEnvironmentProvider } from "react-relay";
import { BrowserRouter } from "react-router-dom";
import type { Config } from "../config";
import { AuthProvider, ConfigContext } from "../core";
import { History, HistoryContext, LocationContext } from "../core/history";
import type { RouteResponse } from "../core/router";
import { Home } from "../pages";

type AppProps = {
  config: Config;
  history: History;
  relay: Environment;
};

class App extends React.Component<AppProps> {
  state = {
    route: undefined as RouteResponse | undefined,
    location: this.props.history.location,
    error: undefined as Error | undefined,
  };

  static getDerivedStateFromError(error: Error): { error: Error } {
    return { error };
  }

  dispose?: () => void;

  componentDidUpdate(): void {
    if (this.state.route?.title) {
      self.document.title = this.state.route.title;
    }
  }

  componentWillUnmount(): void {
    if (this.dispose) this.dispose();
  }

  componentDidCatch(error: Error, errorInfo: unknown): void {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render(): JSX.Element {
    const { config, history } = this.props;
    const { route, location } = this.state;

    return (
      <ConfigContext.Provider value={config}>
        <RelayEnvironmentProvider environment={this.props.relay}>
          <AuthProvider>
            <HistoryContext.Provider value={history}>
              <LocationContext.Provider value={location}>
                <BrowserRouter>
                  <Home />
                </BrowserRouter>
              </LocationContext.Provider>
            </HistoryContext.Provider>
          </AuthProvider>
        </RelayEnvironmentProvider>
      </ConfigContext.Provider>
    );
  }
}

export { App };
