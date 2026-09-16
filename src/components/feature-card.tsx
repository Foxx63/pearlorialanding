import type { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
}: FeatureCardProps) {
  return (
    <Card className={cn("border-[#D9D4C8] bg-white shadow-none", className)}>
      <CardHeader>
        <div
          className={cn(
            "mb-4 flex size-12 items-center justify-center rounded-lg bg-[#0F1E3D] text-[#F3CD66]",
            iconClassName,
          )}
        >
          <Icon aria-hidden="true" className="size-5" />
        </div>
        <CardTitle className="text-xl text-[#0F1E3D]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-7 text-slate-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export type { FeatureCardProps };
