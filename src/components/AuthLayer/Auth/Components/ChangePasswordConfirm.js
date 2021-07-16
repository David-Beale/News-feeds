import React, { useEffect } from "react";

import { ConfirmChangeContainer, StyledLink } from "../authStyle";

export default function ChangePasswordConfirm({ setHeight }) {
  useEffect(() => {
    setHeight(375);
  }, [setHeight]);

  return (
    <>
      <ConfirmChangeContainer>
        <p>Your password has been successfully updated!</p>
      </ConfirmChangeContainer>
      <StyledLink to="/">Sign in</StyledLink>
    </>
  );
}
