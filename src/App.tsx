import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import FullThemeLight from "./styles/themes/themes";
import GlobalStyle from "./styles/global";
import { routes } from "./pages/routes";

function App() {
  return (
    <ThemeProvider theme={FullThemeLight}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          {routes.map((route: any) => (
            <Route
              key={route.name}
              path={route.path}
              exact
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
