import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type TrustBarItem = {
  label: string;
  icon: LucideIcon;
};

type TrustBarProps = {
  items: TrustBarItem[];
  className?: string;
  itemClassName?: string;
};

export function TrustBar({ items, className, itemClassName }: TrustBarProps) {
  return (
    <section
      aria-label="Pearloria trust signals"
      className={cn("border-b border-[#D9D4C8] bg-[#F8F6F0]", className)}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-y divide-[#D9D4C8] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {items.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className={cn(
              "flex min-h-20 items-center gap-3 px-6 py-5 text-sm font-medium text-[#0F1E3D] sm:justify-center lg:px-8",
              itemClassName,
            )}
          >
            <Icon aria-hidden="true" className="size-4 shrink-0 text-[#B48300]" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export type { TrustBarItem, TrustBarProps };
