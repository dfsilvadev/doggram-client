import { HTMLAttributes, ReactNode } from "react";

type FormType = HTMLAttributes<HTMLFormElement>;

export type FormProps = {
  children?: ReactNode;
  title?: string;
} & FormType;
