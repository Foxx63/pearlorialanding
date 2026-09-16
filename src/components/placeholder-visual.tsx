"use client";

import { ImageIcon } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type PlaceholderVisualProps = {
  label: string;
  caption: string;
  className?: string;
};

export function PlaceholderVisual({
  label,
  caption,
  className,
}: PlaceholderVisualProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-label={label}
      className={cn(
        "relative flex min-h-[22rem] items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-6 text-center shadow-2xl shadow-black/20",
        className,
      )}
    >
      <div className="absolute inset-4 rounded-xl border border-dashed border-[#D4A017]/60" />
      <motion.div
        aria-hidden="true"
        className="absolute -left-10 top-12 h-px w-40 bg-[#D4A017]/30"
        animate={shouldReduceMotion ? undefined : { x: [0, 220], opacity: [0, 0.8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-10 bottom-20 h-px w-48 bg-[#F3CD66]/20"
        animate={shouldReduceMotion ? undefined : { x: [0, -260], opacity: [0, 0.7, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 w-full max-w-sm"
        animate={shouldReduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 0.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative overflow-hidden rounded-lg border border-[#D4A017]/40 bg-[#F8F6F0] p-5 text-left text-[#0F1E3D] shadow-2xl shadow-black/25 sm:p-7">
          <div className="absolute inset-3 rounded border border-[#D4A017]/30" />
          <div className="relative flex items-start justify-between gap-5">
            <div>
              <div className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[#0F1E3D]/60">
                <span className="size-2 rounded-full bg-[#D4A017]" />
                Illustrative document
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#B48300]">
                Business registration
              </p>
              <div className="mt-3 h-2 w-32 rounded-full bg-[#0F1E3D]/80" />
              <div className="mt-2 h-1.5 w-24 rounded-full bg-[#0F1E3D]/20" />
            </div>
            <motion.div
              className="flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-[#B48300] text-[#B48300]"
              animate={shouldReduceMotion ? undefined : { rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <ImageIcon aria-hidden="true" className="size-6" strokeWidth={1.5} />
            </motion.div>
          </div>

          <div className="relative mt-8 space-y-2">
            <div className="h-1.5 w-full rounded-full bg-[#0F1E3D]/10" />
            <div className="h-1.5 w-4/5 rounded-full bg-[#0F1E3D]/10" />
            <div className="h-1.5 w-3/5 rounded-full bg-[#0F1E3D]/10" />
          </div>

          <div className="relative mt-7 flex items-end justify-between">
            <div>
              <div className="h-7 w-20 rounded bg-[#D4A017]/25" />
              <p className="mt-2 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[#0F1E3D]/45">
                Placeholder only
              </p>
            </div>
            <div className="h-8 w-24 border-b border-[#0F1E3D]/30" />
          </div>
        </div>

        <div className="mt-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F3CD66]">
            {label}
          </p>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-300">{caption}</p>
        </div>
      </motion.div>
    </div>
  );
}
