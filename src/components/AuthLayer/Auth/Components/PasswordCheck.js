import React, { useEffect, useState } from "react";
import { AuthErrorBox, AuthCheck } from "../authStyle";

export default function PasswordCheck({ password, onSetSubmitEnabled }) {
  const [lowerCaseCheck, setLowerCaseCheck] = useState(false);
  const [upperCaseCheck, setUpperCaseCheck] = useState(false);
  const [numberCheck, setNumberCheck] = useState(false);
  const [lengthCheck, setLengthCheck] = useState(false);
  const [pass, setPass] = useState(false);

  useEffect(() => {
    let regex = /[a-z]/g;
    let localLowerCaseCheck = regex.test(password);
    setLowerCaseCheck(localLowerCaseCheck);
    regex = /[A-Z]/g;
    let localUpperCaseCheck = regex.test(password);
    setUpperCaseCheck(localUpperCaseCheck);
    regex = /[0-9]/g;
    let localNumberCheck = regex.test(password);
    setNumberCheck(localNumberCheck);
    let localLengthCheck = password.length > 7;
    setLengthCheck(localLengthCheck);
    const check =
      localLowerCaseCheck &&
      localUpperCaseCheck &&
      localNumberCheck &&
      localLengthCheck;
    setPass(check);
    onSetSubmitEnabled(check);
  }, [password, onSetSubmitEnabled]);

  return (
    <AuthErrorBox pass={pass}>
      <AuthCheck success={lowerCaseCheck}>
        {lowerCaseCheck ? "✓" : "✖"} Password must contain a lower case letter
      </AuthCheck>
      <AuthCheck success={upperCaseCheck}>
        {upperCaseCheck ? "✓" : "✖"} Password must contain an upper case letter
      </AuthCheck>
      <AuthCheck success={numberCheck}>
        {numberCheck ? "✓" : "✖"} Password must contain a number
      </AuthCheck>
      <AuthCheck success={lengthCheck}>
        {lengthCheck ? "✓" : "✖"} Password must contain at least 8 characters
      </AuthCheck>
    </AuthErrorBox>
  );
}
