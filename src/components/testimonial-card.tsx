import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  author: string;
  detail?: string;
  placeholder?: boolean;
  className?: string;
};

export function TestimonialCard({
  quote,
  author,
  detail,
  placeholder,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn("border-[#D9D4C8] bg-[#0F1E3D] text-white shadow-none", className)}>
      <CardContent className="p-7 sm:p-8">
        <Quote aria-hidden="true" className="size-7 text-[#F3CD66]" />
        <blockquote className="mt-6 text-lg leading-8 text-slate-100">{quote}</blockquote>
        <div className="mt-8 border-t border-white/15 pt-5">
          <p className="font-semibold text-white">{author}</p>
          {detail ? <p className="mt-1 text-sm text-slate-400">{detail}</p> : null}
          {placeholder ? (
            <p className="mt-3 text-xs uppercase tracking-[0.14em] text-[#F3CD66]">
              Testimonial copy placeholder
            </p>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export type { TestimonialCardProps };
