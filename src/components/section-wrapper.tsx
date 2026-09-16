import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function SectionWrapper({
  children,
  className,
  contentClassName,
}: SectionWrapperProps) {
  return (
    <section className={cn("w-full px-6 py-20 sm:px-8 lg:px-12", className)}>
      <div className={cn("mx-auto w-full max-w-7xl", contentClassName)}>{children}</div>
    </section>
  );
}
