"use client";

import { type PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  className?: string;
  appName: string;
}>;

export function Button({ children, className, appName }: ButtonProps) {
  return (
    <button className={className} onClick={() => alert(`Hello from your ${appName} app!`)}>
      {children}
    </button>
  );
}
