import { FC, ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  buttonStyle?: "solid" | "outline" | "soft" | "link";
  size?: "base" | "lg" | "sm" | "xs";
  variant?: "primary" | "secondary";
  iconOnly?: boolean;
  disabled?: boolean;
  className?: string;
}
