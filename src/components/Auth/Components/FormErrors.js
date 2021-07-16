import React from "react";
import { AuthErrorBox } from "../authStyle";

export default function FormErrors({ formErrors }) {
  return <AuthErrorBox>{formErrors.message}</AuthErrorBox>;
}
