import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { LoginContainer, SignUpContainer, MainContainer, EmailContainer } from "./container";
import GlobalStyle from "./GlobalStyle";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={LoginContainer} />
        <Route path="/signUp" exact component={SignUpContainer} />
        <Route path="/main" exact component={MainContainer} />
        <Route path="/signUp/checkEm" exact component={EmailContainer}/>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
