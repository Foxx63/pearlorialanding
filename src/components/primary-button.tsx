import Link from "next/link";
import type { ReactNode } from "react";

import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PrimaryButtonProps = Omit<ButtonProps, "children"> & {
  label: string;
  href: string;
  external?: boolean;
  icon?: ReactNode;
};

export function PrimaryButton({ label, href, external, icon, ...props }: PrimaryButtonProps) {
  const content = (
    <span
      className={cn(
        buttonVariants({ variant: props.variant, size: props.size }),
        props.className,
      )}
    >
      {label}
      {icon}
    </span>
  );

  if (external) {
    return <a href={href} target="_blank" rel="noreferrer">{content}</a>;
  }

  return <Link href={href}>{content}</Link>;
}
