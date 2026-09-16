import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type SiteFooterProps = {
  brand: string;
  tagline: string;
  whatsappHref: string;
  className?: string;
};

export function SiteFooter({ brand, tagline, whatsappHref, className }: SiteFooterProps) {
  return (
    <footer className={cn("bg-[#0F1E3D] px-6 py-10 text-white sm:px-8 lg:px-12", className)}>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xl font-semibold tracking-tight">
            {brand}<span className="text-[#D4A017]">.</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">{tagline}</p>
        </div>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#F3CD66] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1E3D]"
        >
          WhatsApp Pearloria
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </footer>
  );
}

export type { SiteFooterProps };
