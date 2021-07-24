import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";
import ForgotPassword from "./Components/ForgotPassword";
import ForgotPasswordCheckEmail from "./Components/ForgotPasswordCheckEmail";
import ForgotPasswordVerify from "./Components/ForgotPasswordVerify";
import ChangePasswordConfirm from "./Components/ChangePasswordConfirm";

import { Container, SubContainer, LogoContainer } from "./authStyle";

export default function AuthMain() {
  const [height, setHeight] = useState(540);
  const [slideUp, setSlideUp] = useState(false);
  return (
    <Container>
      <SubContainer height={height} slideUp={slideUp}>
        <LogoContainer>News Feeds</LogoContainer>
        <Router>
          <Switch>
            <Route
              exact
              path="/register"
              render={(props) => <Register {...props} setHeight={setHeight} />}
            />

            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route
              exact
              path="/forgotPasswordCheckEmail"
              render={(props) => (
                <ForgotPasswordCheckEmail {...props} setHeight={setHeight} />
              )}
            />
            <Route
              exact
              path="/forgotPasswordVerify"
              render={(props) => (
                <ForgotPasswordVerify {...props} setHeight={setHeight} />
              )}
            />
            <Route
              exact
              path="/changePasswordConfirm"
              render={(props) => (
                <ChangePasswordConfirm {...props} setHeight={setHeight} />
              )}
            />
            <Route
              render={(props) => (
                <Login
                  {...props}
                  onSuccess={() => setSlideUp(true)}
                  setHeight={setHeight}
                />
              )}
            />
          </Switch>
        </Router>
      </SubContainer>
    </Container>
  );
}
