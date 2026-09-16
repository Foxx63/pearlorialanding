import { MessageCircle } from "lucide-react";

import { PrimaryButton, type PrimaryButtonProps } from "@/components/primary-button";
import { cn } from "@/lib/utils";

export type WhatsAppCTAProps = Omit<PrimaryButtonProps, "label" | "href" | "external"> & {
  label?: string;
  href: string;
};

export function WhatsAppCTA({
  label = "Get Registered Now",
  href,
  className,
  ...props
}: WhatsAppCTAProps) {
  return (
    <PrimaryButton
      {...props}
      label={label}
      href={href}
      external
      icon={<MessageCircle aria-hidden="true" className="size-4" />}
      className={cn(
        "bg-[#D4A017] text-[#0F1E3D] shadow-lg shadow-[#D4A017]/15 hover:bg-[#E5B52B]",
        className,
      )}
    />
  );
}
