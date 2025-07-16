import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  `
  inline-flex items-center justify-center
  rounded-md border px-2 py-0.5 text-xs font-medium w-fit
  whitespace-nowrap shrink-0 overflow-hidden gap-1 transition-[color,box-shadow]
  [&>svg]:size-3 [&>svg]:pointer-events-none

  focus-visible:outline-none
  focus-visible:ring-[3px]
  focus-visible:ring-[--color-ring]
  focus-visible:border-[--color-ring]
  aria-invalid:ring-[--color-destructive]/20
  dark:aria-invalid:ring-[--color-destructive]/40
  aria-invalid:border-[--color-destructive]
  `,
  {
    variants: {
      variant: {
        default: `
          border-transparent
          bg-[--color-primary]
          text-[--color-primary-foreground]
          [a&]:hover:bg-[--color-primary-600]
        `,
        secondary: `
          border-transparent
          bg-[--color-secondary]
          text-[--color-secondary-foreground]
          [a&]:hover:bg-[--color-secondary-600]
        `,
        destructive: `
          border-transparent
          bg-[--color-destructive]
          text-white
          [a&]:hover:bg-[--color-destructive]/90
          focus-visible:ring-[--color-destructive]/20
          dark:focus-visible:ring-[--color-destructive]/40
        `,
        outline: `
          border-[--color-border]
          text-[--color-text-base]
          [a&]:hover:bg-[--color-accent]
          [a&]:hover:text-[--color-accent-foreground]
        `,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
