"use client";

import { type PropsWithChildren } from "react";

import { button } from "./button.css";

type ButtonProps = PropsWithChildren<{
  className?: string;
  appName: string;
}>;

export function Button({ children, className, appName }: ButtonProps) {
  return (
    <button className={button + " " + className} onClick={() => alert(`Hello from your ${appName} app!`)}>
      {children}
    </button>
  );
}
