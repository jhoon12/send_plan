import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { LoginContainer } from "./container";
import GlobalStyle from "./GlobalStyle";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={LoginContainer} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
