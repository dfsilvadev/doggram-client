import { InputHTMLAttributes, ReactNode } from "react";

export type TextFieldProps = {
  label?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
