"use client";

import { type PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Code({ children, className }: CardProps) {
  return <code className={className}>{children}</code>;
}
