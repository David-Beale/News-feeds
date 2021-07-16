import React, { useState, useEffect } from "react";
import { useAuth } from "../../AuthLayer/useAuth";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";

import FormErrors from "./FormErrors";
import {
  AuthButton,
  AuthForm,
  AuthInput,
  AuthRedirectText,
  Field,
  InputField,
  StyledLink,
  styleLoginIcon,
} from "../authStyle";

const StyledMailOutlineIcon = styleLoginIcon(MailOutlineIcon);
const StyledLockIcon = styleLoginIcon(LockIcon);

export default function Login({ setHeight, onSuccess }) {
  const { signIn, setAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    setHeight(540);
  }, [setHeight]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    // Amplify/Cognito
    try {
      await signIn(username, password);
      onSuccess(); //set animation
    } catch (error) {
      setErrors(error.message ? error : { message: error });
      setHeight(650);
    }
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      {errors && <FormErrors formErrors={errors} />}
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
        <StyledLink to="/forgotPassword">Forgot your password?</StyledLink>
        <AuthButton>Sign in</AuthButton>
        <Field>
          <AuthRedirectText>Need an account?</AuthRedirectText>
          <StyledLink to="/register">Sign up</StyledLink>
        </Field>
      </AuthForm>
    </>
  );
}
