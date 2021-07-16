import React, { useState } from "react";
import { useAuth } from "../../AuthLayer/useAuth";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import FormErrors from "./FormErrors";
import {
  ForgotPasswordHeader,
  AuthForm,
  Field,
  InputField,
  AuthInput,
  StyledLink,
  AuthButton,
  styleLoginIcon,
} from "../authStyle";

const StyledMailOutlineIcon = styleLoginIcon(MailOutlineIcon);

export default function ForgotPassword(props) {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(null);

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    setErrors(null);
    try {
      await forgotPassword(email);
      props.history.push("/forgotPasswordCheckEmail");
    } catch (error) {
      setErrors(error.message ? error : { message: error });
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <ForgotPasswordHeader>
        <h1>Forgot your password?</h1>
        <p>
          Please enter the email address associated with your account and we'll
          email you a password reset link.
        </p>
      </ForgotPasswordHeader>
      {errors && <FormErrors formErrors={errors} />}

      <AuthForm onSubmit={forgotPasswordHandler}>
        <InputField>
          <StyledMailOutlineIcon fontSize="large" />
          <AuthInput
            type="email"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={onEmailChange}
            required={true}
          />
        </InputField>
        <Field>
          <AuthButton>Reset my password</AuthButton>
        </Field>
        <StyledLink to="/">Sign in</StyledLink>
      </AuthForm>
    </>
  );
}
