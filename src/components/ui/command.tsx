"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        `
        peer size-4 shrink-0 rounded-[4px] border shadow-xs outline-none transition-shadow
        disabled:cursor-not-allowed disabled:opacity-50

        border-[--color-input]
        bg-[--color-input]

        data-[state=checked]:bg-[--color-primary]
        data-[state=checked]:text-[--color-primary-foreground]
        data-[state=checked]:border-[--color-primary]

        focus-visible:ring-[3px]
        focus-visible:ring-[--color-ring]
        focus-visible:border-[--color-ring]

        aria-invalid:ring-[--color-destructive]/20
        dark:aria-invalid:ring-[--color-destructive]/40
        aria-invalid:border-[--color-destructive]
        `,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
