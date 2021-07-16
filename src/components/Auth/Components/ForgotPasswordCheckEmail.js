import React, { useEffect } from "react";

import { ConfirmChangeContainer, StyledLink } from "../authStyle";

export default function ForgotPasswordCheckEmail({ setHeight }) {
  useEffect(() => {
    setHeight(375);
  }, [setHeight]);

  return (
    <>
      <ConfirmChangeContainer>
        <p>Please check your inbox for further instructions</p>
      </ConfirmChangeContainer>
      <StyledLink to="/">Sign in</StyledLink>
    </>
  );
}
