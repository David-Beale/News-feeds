import React, { useState, useEffect } from "react";
import { useAuth } from "../../AuthLayer/useAuth";

import LockIcon from "@material-ui/icons/Lock";

import FormErrors from "./FormErrors";
import PasswordCheck from "./PasswordCheck";

import {
  AuthButton,
  AuthForm,
  AuthInput,
  InputField,
  Field,
  styleLoginIcon,
} from "../authStyle";

const StyledLockIcon = styleLoginIcon(LockIcon);

export default function ForgotPasswordVerify({ history, setHeight }) {
  const [verificationCode, setVerificationCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const { confirmNewPassword } = useAuth();

  useEffect(() => {
    setHeight(540);
  }, [setHeight]);

  const passwordVerificationHandler = async (e) => {
    e.preventDefault();
    setErrors(null);
    try {
      await confirmNewPassword(verificationCode, newPassword);
      history.push("/changePasswordConfirm");
    } catch (error) {
      setErrors(error.message ? error : { message: error });
    }
  };

  const onPasswordChange = (e) => {
    setErrors(null);
    setNewPassword(e.target.value);
  };
  useEffect(() => {
    const regex = /Code=[^&]+/gi;
    const search = window.location.search;
    const code = search.match(regex)[0].slice(5);
    console.log(code);
    setVerificationCode(code);
  }, []);

  return (
    <>
      {errors ? (
        <FormErrors formErrors={errors} />
      ) : (
        <PasswordCheck
          password={newPassword}
          onSetSubmitEnabled={setSubmitEnabled}
        />
      )}

      <AuthForm onSubmit={passwordVerificationHandler}>
        <InputField>
          <StyledLockIcon fontSize="large" />
          <AuthInput
            type="password"
            id="newpassword"
            placeholder="New password"
            value={newPassword}
            onChange={onPasswordChange}
            required={true}
          />
        </InputField>
        <Field>
          <AuthButton disabled={!submitEnabled}>Submit</AuthButton>
        </Field>
      </AuthForm>
    </>
  );
}
