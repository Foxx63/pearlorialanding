import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StepCardProps = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function StepCard({ number, icon: Icon, title, description, className }: StepCardProps) {
  return (
    <Card className={cn("relative border-[#D9D4C8] bg-white shadow-none", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold tracking-[0.16em] text-[#B48300]">
            {number}
          </span>
          <div className="flex size-11 items-center justify-center rounded-full bg-[#F7E7B0] text-[#0F1E3D]">
            <Icon aria-hidden="true" className="size-5" />
          </div>
        </div>
        <CardTitle className="pt-4 text-xl text-[#0F1E3D]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-7 text-slate-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export type { StepCardProps };
