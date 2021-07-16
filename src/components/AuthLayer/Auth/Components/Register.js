import React, { useState, useEffect } from "react";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";

import FormErrors from "./FormErrors";
import PasswordCheck from "./PasswordCheck";

import {
  AuthButton,
  AuthForm,
  AuthInput,
  AuthRedirectText,
  InputField,
  StyledLink,
  styleLoginIcon,
  Field,
} from "../authStyle";
import { useDispatch } from "react-redux";
import { signUp } from "../../../../redux/auth";

const StyledMailOutlineIcon = styleLoginIcon(MailOutlineIcon);
const StyledLockIcon = styleLoginIcon(LockIcon);

export default function Register({ history, setHeight }) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [submitEnabled, setSubmitEnabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setHeight(650);
  }, [setHeight]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);

    setSubmitted(true);
    try {
      await dispatch(signUp(username, password));
    } catch (error) {
      setErrors(error.message ? error : { message: error });
      setSubmitted(false);
    }
  };

  const onUsernameChange = (e) => {
    setErrors(null);
    setUsername(e.target.value);
  };
  const onPasswordChange = (e) => {
    setErrors(null);
    setPassword(e.target.value);
  };
  return (
    <>
      {errors ? (
        <FormErrors formErrors={errors} />
      ) : (
        <PasswordCheck
          password={password}
          onSetSubmitEnabled={setSubmitEnabled}
        />
      )}

      <AuthForm onSubmit={handleSubmit}>
        <InputField>
          <StyledMailOutlineIcon fontSize="large" />
          <AuthInput
            type="text"
            id="username"
            placeholder="Email"
            value={username}
            onChange={onUsernameChange}
            required={true}
            autoComplete="username"
          />
        </InputField>

        <InputField>
          <StyledLockIcon fontSize="large" />
          <AuthInput
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onPasswordChange}
            required={true}
            autoComplete="current-password"
          />
        </InputField>
        <AuthButton disabled={!submitEnabled || submitted}>Sign up</AuthButton>
        <Field>
          <AuthRedirectText>Already have an account?</AuthRedirectText>
          <StyledLink to="/">Sign in</StyledLink>
        </Field>
      </AuthForm>
    </>
  );
}
